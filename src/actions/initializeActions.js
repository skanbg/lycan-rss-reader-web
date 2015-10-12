/* global module:false */
'use strict';

import co from 'co';
import Dispatcher from '../dispatcher/appDispatcher';
import FeedApi from '../communicators/feedApi';
import ActionTypes from '../constants/actionTypes';
import feedListPersister from '../persistance/feedListPersister';

class InitializeActions {
	static initApp() {
		return co(function*() {
			var suggestedFeeds = yield FeedApi.getSuggestedFeeds();
			var persistedFeeds = yield feedListPersister.getPlain();

			Dispatcher.dispatch({
				actionType: ActionTypes.INITIALIZE,
				initialData: {
					suggestedFeeds: suggestedFeeds,
					feeds: persistedFeeds
				}
			});
		});
	}
}

module.exports = InitializeActions;