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
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

import FeedStore from '../../stores/feedStore';
import FeedList from './feedList';

class HomePage extends Component {
	constructor(props) {
	  super(props);
	}

	componentWillMount () {
		FeedStore.addChangeListener(this._onChange.bind(this));
		this.setState({feeds: FeedStore.getAllFeeds()});
	}

	componentWillUnmount(){
		FeedStore.removeChangeListener(this._onChange.bind(this));
	}

	_onChange(){
		this.setState({feeds: FeedStore.getAllFeeds()});
	}

	render() {
		return (
			<div className="home-page-container">
				<Grid>
					<Row className="show-grid">
					    <div className="jumbotron heading-container">
						    <Grid>
							    <Row className="show-grid">
							      <Col xsOffset={3} xs={3} className="page-heading-outer center-block"><h1 className="page-heading">Feed</h1></Col>
							      <Col xs={3}><img className="logo" src="http://icons.iconseeker.com/png/fullsize/smashing-rss-feeds/ballon-rss-feed.png" /></Col>
							    </Row>
							</Grid>
					    </div>
					</Row>
					<Row className="show-grid">
						<FeedList feeds={this.state.feeds} />
					</Row>
				</Grid>
			</div>
		);
	}
}

module.exports = HomePage;