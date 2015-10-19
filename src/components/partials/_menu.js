/* global require:false, module:false, $:false, jQuery:false */
'use strict';

import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	return(
      <Navbar inverse toggleNavKey={0}>
        <LinkContainer to="/" query={{}}>
          <NavBrand className="app-name">Lycan Reader</NavBrand>
        </LinkContainer>
        <Nav right eventKey={0} className="menu-container"> {/* This is the eventKey referenced */}
          <LinkContainer to="/feeds" query={{}}>
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/add-feed" query={{}}>
            <NavItem eventKey={2}>Add Feed</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}

module.exports = Menu;