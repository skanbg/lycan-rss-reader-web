/* global require:false, module:false, $:false, jQuery:false */
'use strict';

import jqueryBrowserify from 'jquery-browserify';
$ = jQuery = jqueryBrowserify;
import React, {Component, cloneElement} from 'react';

//Actions
import persistingActions from '../actions/persistingActions';

import Menu from './partials/_menu';

class App extends Component {
  componentDidMount() {
    if (this._onUnload) {
      window.addEventListener("unload", this._onUnload);
    }
    if (this.onBeforeUnload) {
      window.addEventListener("beforeunload", this.onBeforeUnload);
    }
  }

  componentWillUnmount() {
    if (this._onUnload) {
      window.removeEventListener("unload", this._onUnload);
    }
    if (this.onBeforeUnload) {
      window.removeEventListener("beforeunload", this.onBeforeUnload);
    }
  }

  //Store in the localstorage the current state
  _onUnload (){
    persistingActions.storeData();
  }

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