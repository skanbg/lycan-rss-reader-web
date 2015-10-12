/* global module:false */
'use strict';

import BaseError from './BaseError';

class InputError extends BaseError {
	constructor(m) {
		super(m);
	}
}

module.exports = InputError;