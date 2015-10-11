/* global require:false, module:false, $:false, jQuery:false */
'use strict';

import React from 'react';
import {
	Component
}
from 'react';
import {
	Router, Route, Link
}
from 'react-router';

$ = jQuery = require('jquery-browserify');

class HomePage extends Component {
	render() {
		return (
			    <div className="jumbotron">
			        <h1>Greetings page</h1>
			    </div>
			);
	}
}

module.exports = HomePage;