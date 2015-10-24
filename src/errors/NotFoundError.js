/* global module:false */
'use strict';

import BaseError from './BaseError';

class NotFoundError extends BaseError {
	constructor(m) {
		super(m);
	}
}

module.exports = NotFoundError;