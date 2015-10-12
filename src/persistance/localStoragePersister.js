/* global module:false */
'use strict';

class LocalStoragePersister {
	static _persistByKey(key, value){
		var stringifiedValue = JSON.stringify(value);
		localStorage.setItem(key, stringifiedValue);
	}

	static _getByKey(key){
		var rawValue = localStorage.getItem(key);
		var normalizedValue = JSON.parse(rawValue);

		return normalizedValue;
	}

	static _removeByKey(key){
		var removedValue = localStorage.removeItem(key);

		return removedValue;
	}
}

module.exports = LocalStoragePersister;