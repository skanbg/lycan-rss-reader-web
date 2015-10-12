/* global module:false */
'use strict';

import co from 'co';

import ApiManager from './apiManager';

var FeedApi = {
	loadFeedByUrl: function(feedUrl) {
		return co(function*() {
			var requestResult = yield ApiManager.getFeedFromUrl(feedUrl);
			return requestResult;
		});
	},
	getSuggestedFeeds: function() {
		return co(function*() {
			var requestResult = yield ApiManager.getSuggestedFeeds();
			return requestResult;
		});
	}
};

module.exports = FeedApi;