/* global module:false */
'use strict';

import BaseError from './BaseError';

class AlreadyExistsError extends BaseError {
	constructor(m) {
		super(m);
	}
}

module.exports = AlreadyExistsError;