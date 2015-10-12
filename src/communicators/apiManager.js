/* global module:false */
'use strict';

import requester from './requester';
import co from 'co';

const YAHOO_API_URL = 'https://query.yahooapis.com/v1/public/yql?q=';
const QUERY_TEMPLATE = 'select * from xml where url = ';

const SUGGESTED_FEEDS = [{
	url: 'http://feeds.washingtonpost.com/rss/rss_election-2012',
	title: 'Post Politics',
	description: 'Washington Post politics news.'
}, {
	url: 'http://rss.nytimes.com/services/xml/rss/nyt/Europe.xml',
	title: 'NYT > Europe',
	description: 'Europe'
}];

class ApiManager {
	static getFeedFromUrl(url) {
		return co(function*() {
			var requestUrl = ApiManager._resourceUrlFormatter(url);
			var response = yield requester.getJson(requestUrl);
			return ApiManager._handleUnproperResponse(
				ApiManager._handleUnproperResponse(
					ApiManager._handleUnproperResponse(
						ApiManager._handleUnproperResponse(
							ApiManager._handleUnproperResponse(response).body
						).query
					).results
				).rss
			).channel;
		});
	}

	static getSuggestedFeeds() {
		return co(function*() {
			return yield SUGGESTED_FEEDS;
		});
	}

	static _resourceUrlFormatter(url) {
		var requestQuery = QUERY_TEMPLATE + '\'' + url + '\'';
		var requestUrl = YAHOO_API_URL + encodeURIComponent(requestQuery);
		return requestUrl;
	}

	static _handleUnproperResponse(response) {
		return response || {};
	}
}

module.exports = ApiManager;