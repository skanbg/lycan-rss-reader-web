/* global require:false, module:false, $:false, jQuery:false */
'use strict';

import React, {
	Component
}
from 'react';

class AddFeedPage extends Component {
	constructor(props) {
	  super(props);
	}

	render() {
		return (
				<div className="not-found-page-container">
				    <div className="jumbotron heading-container">
				    	<h1 className="text-center">Page not found</h1>
				    </div>
			    </div>
			);
	}
}

module.exports = AddFeedPage;