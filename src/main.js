/* global require:false, module:false */
'use strict';

require("babelify/polyfill");

import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
// import { createHistory } from 'history';
import createHashHistory from 'history/lib/createHashHistory';

let history = createHashHistory();
// let history = createHistory();

//Routes
import routes from './routes';
//Actions
import InitializeActions from './actions/initializeActions';

InitializeActions.initApp();

render((
  <Router history={history}>
  	{routes}
  </Router>
), document.getElementById('app'))