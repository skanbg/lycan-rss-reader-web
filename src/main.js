/* global require:false, module:false */
'use strict';

require("babelify/polyfill");

import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';

//Routes
import routes from './routes';
//Actions
import InitializeActions from './actions/initializeActions';

InitializeActions.initApp();

render((
  <Router>
  	{routes}
  </Router>
), document.getElementById('app'))