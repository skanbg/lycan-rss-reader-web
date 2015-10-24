/* global module:false */
'use strict';

import co from 'co';
import Dispatcher from '../dispatcher/appDispatcher';
import FeedApi from '../communicators/feedApi';
import FeedStore from '../stores/feedStore';
import ActionTypes from '../constants/actionTypes';
import AvailabilityError from '../errors/AvailabilityError';
import AlreadyExistsError from '../errors/AlreadyExistsError';
import NotFoundError from '../errors/NotFoundError';

var FeedActions = {
	addFeedByFeedUrl: function(feedUrl) {
		return co(function*() {
			var newFeed = yield FeedApi.loadFeedByUrl(feedUrl);

			if (!newFeed) {
				throw new AvailabilityError('Feed not found');
			}

			var isADuplicateFeed = !!FeedStore.isExisting(newFeed);

			if(isADuplicateFeed){
				throw new AlreadyExistsError('Trying to add duplicate feed');
			}

			Dispatcher.dispatch({
				actionType: ActionTypes.ADD_FEED,
				feed: newFeed
			});
		});
	},
	refreshFeedByFeedUrl: function(feedUrl) {
		return co(function*() {
			var newFeed = yield FeedApi.loadFeedByUrl(feedUrl);

			if (!newFeed) {
				throw new AvailabilityError('Feed not found');
			}

			var isNew = !FeedStore.isExisting(newFeed);

			if(isNew){
				throw new NotFoundError('Trying to refresh feed that is not in your feeds');
			}

			Dispatcher.dispatch({
				actionType: ActionTypes.UPDATE_FEED,
				feed: newFeed
			});
		});
	},
	removeFeedByFeedUrl: function(feedUrl) {
		return co(function*() {
			var isNew = !FeedStore.getFeedByUrl(feedUrl);

			if(isNew){
				throw new NotFoundError('Trying to remove feed that is not in your feeds');
			}

			Dispatcher.dispatch({
				actionType: ActionTypes.REMOVE_FEED,
				feedUrl: feedUrl
			});
		});
	},
	getSuggestedFeeds: function(feedUrl) {
		return co(function*() {
			var newFeed = yield FeedApi.loadFeedByUrl(feedUrl);

			Dispatcher.dispatch({
				actionType: ActionTypes.ADD_FEED,
				feed: newFeed
			});
		});
	}
};

module.exports = FeedActions;