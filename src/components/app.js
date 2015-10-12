/* global require:false, module:false, $:false, jQuery:false */
'use strict';

import jqueryBrowserify from 'jquery-browserify';
$ = jQuery = jqueryBrowserify;
import React, {Component, cloneElement} from 'react';

import Menu from './partials/_menu';

class App extends Component {
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

         // {this.props.children && cloneElement(this.props.children, {
         //      addNewSubscription: this.addNewSubscription
         //    })}

module.exports = App;