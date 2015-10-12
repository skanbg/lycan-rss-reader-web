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

import { Input, Glyphicon, Button, ProgressBar, Well } from 'react-bootstrap';
//Errors
import AvailabilityError from '../../errors/AvailabilityError';
import AlreadyExistsError from '../../errors/AlreadyExistsError';

class AddFeedForm extends Component {
	constructor(props) {
	  super(props);
	}

	handleSubmit(e) {
		e.preventDefault();
		var rssUrl = findDOMNode(this.refs.rssUrl);
		this.props.addNewSubscription(rssUrl.value);
		rssUrl.value = '';
	}

	render() {
		var addNewSubscriptionError;

		if(this.props.addNewSubscriptionError){
			if(this.props.addNewSubscriptionError instanceof AlreadyExistsError){
				addNewSubscriptionError = (
					<Well bsStyle="danger">This RSS feed already exists in your subscriptions</Well>
				);
			} else if(this.props.addNewSubscriptionError instanceof AvailabilityError){
				addNewSubscriptionError = (
					<Well bsStyle="danger">The RSS Feed is not available or not does not exist</Well>
				);
			} else {
				addNewSubscriptionError = (
					<Well bsStyle="danger">Loading the RSS feed failed</Well>
				);
			}
		}

		var progressBar;

		if(this.props.addNewSubscriptionStatus && this.props.addNewSubscriptionStatus == 'loading'){
			progressBar = (<ProgressBar className="feed-parsing-progress" bsStyle="info" active now={50} />);
		}

		return (
			    <div className="jumbotron heading-container">
			    	<div className="input-group">
					   <input className="form-control" type="text" placeholder="RSS Link" ref="rssUrl" />
					   <span className="input-group-btn">
					        <Button onClick={this.handleSubmit.bind(this)}>Subscribe</Button>
					   </span>
					</div>
					{addNewSubscriptionError}
					{progressBar}
			    </div>
			);
	}
}

module.exports = AddFeedForm;