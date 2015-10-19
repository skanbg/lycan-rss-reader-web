/* global require:false, module:false, $:false, jQuery:false */
'use strict';

import { Route, IndexRoute } from 'react-router';
import React from 'react';

import App from './components/app';
import HomePage from './components/home/homePage';
import AddFeedPage from './components/feed/addFeedPage';
import FeedPage from './components/feed/feedPage';
import NotFoundPage from './components/errors/notFoundPage';

var routes = (
    <Route path="/" component={App}>
  		<IndexRoute component={HomePage}/>
        <Route path="add-feed" component={AddFeedPage} />
      	<Route path="feeds" >
  			<IndexRoute component={HomePage}/>
      		<Route path="/feed/:feedId" component={FeedPage} />
      	</Route>
      	<Route path="*" component={NotFoundPage}/>
    </Route>
);

module.exports = routes;