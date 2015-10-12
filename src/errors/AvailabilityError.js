/* global module:false */
'use strict';

import BaseError from './BaseError';

class AvailabilityError extends BaseError {
	constructor(m) {
		super(m);
	}
}

module.exports = AvailabilityError;