/* global module:false */
'use strict';

import BaseError from './BaseError';

class UnexpectedError extends BaseError {
	constructor(m) {
		super(m);
	}
}

module.exports = UnexpectedError;