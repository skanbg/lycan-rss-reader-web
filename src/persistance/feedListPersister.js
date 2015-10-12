/* global module:false */
'use strict';

//Persisters
import localStoragePersister from './localStoragePersister';
//Constants
import localStorageKeys from '../constants/localStorageKeys';
import ActionTypes from '../constants/actionTypes';
//Dispatcher
import Dispatcher from '../dispatcher/appDispatcher';

let runtimeListContainer = null;

class FeedListPersister extends localStoragePersister {
	static get _runtimeContainer(){
		if(!runtimeListContainer){
			FeedListPersister.restoreState();
			runtimeListContainer = runtimeListContainer || [];
		}

		return runtimeListContainer;
	}

	static set _runtimeContainer(value){
		runtimeListContainer = value;

		return runtimeListContainer;
	}

	static get _persistanceKey() {
		return localStorageKeys.FEED_LIST;
	}

	static persist(value) {
		FeedListPersister._runtimeContainer.push(value);
		FeedListPersister.saveState();

		return value;
	}

	static removeByIndex(index) {
		var removedValue = FeedListPersister._runtimeContainer.splice(index, 1);
		FeedListPersister.saveState();

		return removedValue;
	}

	static getByIndex(index) {
		return FeedListPersister._runtimeContainer[index];
	}

	static restoreState() {
		FeedListPersister._runtimeContainer = super._getByKey(FeedListPersister._persistanceKey) || [];
	}

	static saveState() {
		super._persistByKey(FeedListPersister._persistanceKey, FeedListPersister._runtimeContainer);
	}

	static forcePersist(list){
		FeedListPersister._runtimeContainer = list;
		FeedListPersister.saveState();
	}

	static getPlain(){
		return FeedListPersister._runtimeContainer;
	}
}

Dispatcher.register(function(action) {
	switch (action.actionType) {
		case ActionTypes.STORE_FEED_LIST:
			FeedListPersister.forcePersist(action.storedData.feeds);
	}
});

module.exports = FeedListPersister;