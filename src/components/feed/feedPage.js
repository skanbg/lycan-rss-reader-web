/* global require:false, module:false, $:false, jQuery:false */
'use strict';

//Externals
import React, { Component } from 'react';
import {
	Router, Route, Link
}
from 'react-router';
import { findDOMNode } from 'react-dom';
import { Grid, Col, Row, Thumbnail, Button, FormControls } from 'react-bootstrap';

//Subcomponents
import ItemsList from './itemsList';
//Stores
import FeedStore from '../../stores/feedStore';
//Actions
import FeedActions from '../../actions/feedActions';

class AddFeedPage extends Component {
	constructor(props) {
	  super(props);
	}

	componentWillMount () {
		FeedStore.addChangeListener(this._onChange.bind(this));
		let decodedFeedId = decodeURIComponent(this.props.params.feedId);
		let targetFeed = FeedStore.getFeedByUrl(decodedFeedId);
		this.setState({
			feedId: decodedFeedId,
			feed: targetFeed || {
				items: {}
			}
		});
	}

	componentWillUnmount(){
		FeedStore.removeChangeListener(this._onChange.bind(this));
	}

	_onChange(){
		let targetFeed = FeedStore.getFeedByUrl(this.state.feedId);
		this.setState({feed: targetFeed});
	}

	refreshFeed(){
		let subscriptionUrl = this.state.feedId;
		FeedActions.refreshFeedByFeedUrl(subscriptionUrl);
		console.log('refreshed');
	}

	removeFeed(){
		let subscriptionUrl = this.state.feedId;
		FeedActions.removeFeedByFeedUrl(subscriptionUrl);
		this.props.history.pushState(null, `/`);
	}

	render() {
		const staticTextExample = (
		  <form className="form-horizontal">
			<Grid fluid={true} className="pull-right">
				<Row>
					<Col xs={6} md={5} lg={5}>
						<Button bsStyle="primary" onClick={this.refreshFeed.bind(this)}>Refresh feed</Button>
					</Col>
					<Col xs={6} md={5} lg={5}>
						<Button bsStyle="danger" onClick={this.removeFeed.bind(this)}>Remove feed</Button>
					</Col>
				</Row>
			</Grid>
		    <FormControls.Static label="Title" labelClassName="col-xs-2" wrapperClassName="col-xs-10" value={this.state.feed.title} />
		    <FormControls.Static label="Description" labelClassName="col-xs-2" wrapperClassName="col-xs-10" value={this.state.feed.description} />
		  </form>
		);

		return (
				<div className="feed-page-container">
					{staticTextExample}
					<ItemsList items={this.state.feed.item} />
			    </div>
			);
	}
}

module.exports = AddFeedPage;