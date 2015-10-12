/* global require:false, module:false, $:false, jQuery:false */
'use strict';

import { Route, IndexRoute } from 'react-router';
import React from 'react';

import App from './components/app';
import HomePage from './components/home/homePage';
import AddFeedPage from './components/feed/addFeedPage';
import NotFoundPage from './components/errors/notFoundPage';

var routes = (
    <Route name="app" path="/" component={App}>
  		<IndexRoute component={HomePage}/>
        <Route path="add-feed" component={AddFeedPage} />
      	<Route path="home" component={HomePage}/>
      	<Route path="*" component={NotFoundPage}/>
    </Route>
);

module.exports = routes;