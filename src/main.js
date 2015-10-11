// /* global require:false, module:false, $:false, jQuery:false */
// 'use strict';

// import React from 'react';
// import {
// 	Component
// }
// from 'react';
// import ReactDOM from 'react-dom';
// import {
// 	Router, Route, Link
// }
// from 'react-router';

// $ = jQuery = require('jquery-browserify');

var HomePage = require('./components/homePage');
var GreetingsPage = require('./components/greetingsPage');
var Menu = require('./components/partials/_menu');

import React from 'react';
import { render } from 'react-dom';
import { createHistory, useBasename } from 'history';
import { Router, Route, Link, IndexRoute } from 'react-router';

class App extends React.Component {
  render() {
  	return(
  		<div>
		  <Menu />
		  <div className="container">
		  	{this.props.children}
		  </div>
  		</div>
    );
  }
}

// class SignedIn extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Signed In</h2>
//         {this.props.children}
//       </div>
//     )
//   }
// }

// class Home extends React.Component {
//   render() {
//     return (
//       <h3>Welcome home!</h3>
//     )
//   }
// }

// class SignedOut extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Signed Out</h2>
//         {this.props.children}
//       </div>
//     )
//   }
// }

// class SignIn extends React.Component {
//   render() {
//     return (
//       <h3>Please sign in.</h3>
//     )
//   }
// }

// class ForgotPassword extends React.Component {
//   render() {
//     return (
//       <h3>Forgot your password?</h3>
//     )
//   }
// }

render((
  <Router>
    <Route path="/" component={App}>
  		<IndexRoute component={HomePage}/>
        <Route path="greetings" component={GreetingsPage} />
      	<Route path="home" component={HomePage}/>
    </Route>
  </Router>
), document.getElementById('app'))