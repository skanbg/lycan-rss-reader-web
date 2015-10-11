/* global require:false, module:false, $:false, jQuery:false */
'use strict';

import React from 'react';
import {Component} from 'react';
import { Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Menu extends Component {
  render() {
  	return(
      <Navbar inverse toggleNavKey={0}>
        <NavBrand className="app-name">Lycan Reader</NavBrand>
        <Nav right eventKey={0} className="menu-container"> {/* This is the eventKey referenced */}
          <NavItem eventKey={1} href="#/home">Home</NavItem>
          <NavItem eventKey={2} href="#/greetings">Greetings</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

module.exports = Menu;