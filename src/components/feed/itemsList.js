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

import { Grid, Col, Row, Thumbnail, Button } from 'react-bootstrap';

class ItemsList extends Component {
	constructor(props) {
	  super(props);
	}

	render() {
		var self = this;
		var itemsList;

		if(this.props.items){
			let imageSrcRegex = /src="([^"]+)"/;
			itemsList = (
				<Grid fluid={true}>
			    	<Row>
						{this.props.items.map(function (feed) {
							let itemTitle = feed.title;
							let imgSrc = imageSrcRegex.exec(feed.description);
							let itemImage;

							if(imgSrc && imgSrc.length>=2){
								itemImage = (<img src={imgSrc[1]} className="img-responsive img-thumbnail" alt="242x200" />);
							}

							return (
							    <Col key={feed.link} xs={6} md={4}>
							    	<a href={feed.link}>
								      	{itemImage}
								        <h3>{itemTitle}</h3>
							        </a>
							    </Col>
							);
						})}
					</Row>
				</Grid>
			);
		}

		return (
				<div className="items-list">
			      {itemsList}
			    </div>
			);
	}
}

module.exports = ItemsList;