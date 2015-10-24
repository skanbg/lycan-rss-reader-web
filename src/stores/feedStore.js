/* global module:false */
'use strict';

import _ from 'lodash';

import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import {
	EventEmitter
}
from 'events';

var CHANGE_EVENT = 'change';
var _feeds = [];

var FeedStore = Object.assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	getAllFeeds: function() {
		return _feeds;
	},
	getFeedByUrl: function(url) {
		return _.find(_feeds, function(feed) {
			let searchedLink = feed.link[0];
			let searchedLinkHref = searchedLink.href;
			return (searchedLink && searchedLink == url) || (searchedLink && searchedLinkHref && searchedLinkHref == url);
		});
	},
	isExisting: function(searchedFeed) {
		return _.find(_feeds, function(feed) {
			return FeedStore.areEqual(feed, searchedFeed);
		});
	}
});

FeedStore.areEqual = function(firstObj, secondObj) {
	let searchedLink = firstObj.link[0];
	let searchedLinkHref = searchedLink.href;
	return (searchedLink && searchedLink == secondObj.link[0].href) || (searchedLink && searchedLinkHref && searchedLinkHref == secondObj.link[0].href);
};

Dispatcher.register(function(action) {
	switch (action.actionType) {
		case ActionTypes.ADD_FEED:
			_feeds.push(action.feed);
			FeedStore.emitChange();
			break;
		case ActionTypes.UPDATE_FEED:
			_feeds = _.map(_feeds, function(currentFeed) {
				let areEqual = FeedStore.areEqual(action.feed, currentFeed);
				return areEqual ? action.feed : currentFeed;
			});
			FeedStore.emitChange();
			break;
		case ActionTypes.REMOVE_FEED:
			_feeds = _.reject(_feeds, function(currentFeed) {
				let areEqual = FeedStore.areEqual({
					link: [action.feedUrl]
				}, currentFeed);
				return areEqual;
			});
			FeedStore.emitChange();
			break;
		case ActionTypes.INITIALIZE:
			_feeds = action.initialData.feeds;
			FeedStore.emitChange();
			break;
	}
});

module.exports = FeedStore;