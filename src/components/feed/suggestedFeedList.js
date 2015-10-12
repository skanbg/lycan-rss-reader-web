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
import { findDOMNode } from 'react-dom';

import { ListGroup, Panel, ListGroupItem } from 'react-bootstrap';

class FeedList extends Component {
	constructor(props) {
	  super(props);
	}

	addNewSubscription(feed) {
		var rssUrl = feed.url;
		this.props.addNewSubscription(rssUrl);
	}

	render() {
		var self = this;
		var suggestedFeeds;

		if(this.props.suggestedFeeds){
			suggestedFeeds = (
				<ListGroup fill>
					{this.props.suggestedFeeds.map(function (feed) {
						return (
							<ListGroupItem onClick={self.addNewSubscription.bind(self, feed)} key={feed.url} className="suggestion-option">{feed.title}</ListGroupItem>
						);
					})}
				</ListGroup>);
		} else {
			suggestedFeeds = null;
		}

		const title = (
		  <h3>Suggested feeds</h3>
		);

		return (
		      <div>
			    <Panel header={title} className="suggestion-panel">
			      {suggestedFeeds}
			    </Panel>
			  </div>
			);
	}
}

module.exports = FeedList;