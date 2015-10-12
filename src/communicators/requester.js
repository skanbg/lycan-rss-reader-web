/* global module:false */
'use strict';

import request from 'superagent';
import co from 'co';

class Requester {
	static get(url, requestDecorator) {
		return new Promise(function(resolve, reject) {
			var requestObj = request.get(url);

			if (requestDecorator) {
				requestDecorator(requestObj);
			}

			requestObj.end(function(err, res) {
				if (err) {
					return reject(err);
				}

				return resolve(res);
			});
		});
	}

	static getJson(url) {
		return co(function*() {
			var requestResponse = yield Requester.get(url, function(request) {
				request.set('Accept', 'application/json');
			});
			return requestResponse;
		});
	}

	static getXml(url) {
		return co(function*() {
			var requestResponse = yield Requester.get(url, function(request) {
				request.set('Accept', 'text/xml');
			});
			return requestResponse;
		});
	}
}

module.exports = Requester;