/* global module:false */
'use strict';

//Persisters
import localStoragePersister from './localStoragePersister';
//Constants
import localStorageKeys from '../constants/localStorageKeys';

let runtimeListContainer = {};

class FeedPersister extends localStoragePersister {
	static get _persistanceKey() {
		return localStorageKeys.FEED_SUBSCRIPTION;
	}

	static persist(key, value) {
		runtimeListContainer[key] = value;
		FeedPersister.saveState();

		return value;
	}

	static removeByKey(key) {
		var removedValue = runtimeListContainer[key];
		delete runtimeListContainer[key];
		FeedPersister.saveState();

		return removedValue;
	}

	static getByKey(key) {
		return runtimeListContainer[key];
	}

	static restoreState() {
		runtimeListContainer = super._getByKey(FeedPersister._persistanceKey) || {};
	}

	static saveState() {
		super._persistByKey(FeedPersister._persistanceKey, runtimeListContainer);
	}

	static forcePersist(list){
		runtimeListContainer = list;
		FeedPersister.saveState();
	}
}

module.exports = FeedPersister;