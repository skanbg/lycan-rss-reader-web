/* global module:false */
'use strict';

import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import {
	EventEmitter
}
from 'events';

var CHANGE_EVENT = 'change';
var _suggestedFeeds = [];

var SuggestedFeedStore = Object.assign({}, EventEmitter.prototype, {
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
		return _suggestedFeeds;
	}
});

Dispatcher.register(function(action) {
	switch (action.actionType) {
		case ActionTypes.INITIALIZE:
			_suggestedFeeds = action.initialData.suggestedFeeds;
			SuggestedFeedStore.emitChange();
	}
});

module.exports = SuggestedFeedStore;