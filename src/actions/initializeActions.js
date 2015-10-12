/* global module:false */
'use strict';

import co from 'co';
import Dispatcher from '../dispatcher/appDispatcher';
import FeedApi from '../communicators/feedApi';
import ActionTypes from '../constants/actionTypes';

class InitializeActions {
	static initApp() {
		return co(function*() {
			var suggestedFeeds = yield FeedApi.getSuggestedFeeds();

			Dispatcher.dispatch({
				actionType: ActionTypes.INITIALIZE,
				initialData: {
					suggestedFeeds: suggestedFeeds
				}
			});
		});
	}
}

module.exports = InitializeActions;