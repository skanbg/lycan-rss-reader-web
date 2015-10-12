/* global module:false */
'use strict';

//Externals
import co from 'co';
//Dispatcher
import Dispatcher from '../dispatcher/appDispatcher';
//Constants
import ActionTypes from '../constants/actionTypes';
//Stores
import feedStore from '../stores/feedStore';

class PersistingActions {
	static storeData() {
		return co(function*() {
			var feeds = feedStore.getAllFeeds();

			Dispatcher.dispatch({
				actionType: ActionTypes.STORE_FEED_LIST,
				storedData: {
					feeds: feeds
				}
			});
		});
	}
}

module.exports = PersistingActions;