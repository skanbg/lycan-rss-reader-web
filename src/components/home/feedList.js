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

	render() {
		var feeds;

		if(this.props.feeds){
			feeds = (
				<ListGroup fill>
					{this.props.feeds.map(function (feed) {
						return (
							<ListGroupItem key={feed.link[0].href} className="suggestion-option"><span className="title">{feed.title}</span> - <span className="description">{feed.description}</span></ListGroupItem>
						);
					})}
				</ListGroup>);
		} else {
			feeds = null;
		}

		const title = (
		  <h3>Your feeds</h3>
		);

		return (
		      <div>
			    <Panel header={title} className="suggestion-panel">
			      {feeds}
			    </Panel>
			  </div>
			);
	}
}

module.exports = FeedList;