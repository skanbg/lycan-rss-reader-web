/* global require:false, module:false, $:false, jQuery:false */
'use strict';

//Externals
import React, { Component } from 'react';
import {
	Router, Route, Link
}
from 'react-router';
import { findDOMNode } from 'react-dom';
import { Grid, Row } from 'react-bootstrap';

//Subcomponents
import AddFeedForm from './addFeedForm';
import SuggestedFeedList from './suggestedFeedList';
//Stores
import SuggestedFeedStore from '../../stores/suggestedFeedStore';
//Actions
import FeedActions from '../../actions/feedActions';

class AddFeedPage extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	suggestedFeeds: [],
	  	addNewSubscriptionStatus: null
	  };
	}

	componentWillMount () {
		SuggestedFeedStore.addChangeListener(this._onChange.bind(this));
		this.setState({suggestedFeeds: SuggestedFeedStore.getAllFeeds()});
	}

	componentWillUnmount(){
		SuggestedFeedStore.removeChangeListener(this._onChange.bind(this));
	}

	addNewSubscription(subscriptionUrl){
		var self = this;
		self.setState({addNewSubscriptionError: null, addNewSubscriptionStatus: 'loading'});
		FeedActions.addFeedByFeedUrl(subscriptionUrl)
			.then(function (res) {
				self.setState({addNewSubscriptionStatus: null});	
			})
			.catch(function (err) {
				self.setState({addNewSubscriptionError: err});
				self.setState({addNewSubscriptionStatus: null});
			});
	}

	_onChange(){
		this.setState({suggestedFeeds: SuggestedFeedStore.getAllFeeds()});
	}

	render() {

		return (
				<div className="add-feed-page-container">
					<Grid>
						<Row className="show-grid">
				    		<AddFeedForm addNewSubscriptionError={this.state.addNewSubscriptionError} addNewSubscriptionStatus={this.state.addNewSubscriptionStatus} addNewSubscription={this.addNewSubscription.bind(this)} />
						</Row>
						<Row className="show-grid">
							<SuggestedFeedList suggestedFeeds={this.state.suggestedFeeds} addNewSubscription={this.addNewSubscription.bind(this)} />
						</Row>
					</Grid>
			    </div>
			);
	}
}

module.exports = AddFeedPage;