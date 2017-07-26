import React from 'react';
import {  Link  } from 'react-router-dom';
import { Container, Row, Col,
Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
 } from 'reactstrap';

export class Header extends React.Component {
  render(){
    return (
      /*<nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <div className="navbrand">
              <h1>Brand Text</h1>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/topics">Topics</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      */
      <Navbar full light>
        <Container>
          <NavbarBrand href="/">Brand</NavbarBrand>
          <Nav className="pull-xs-right" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
              <NavLink tag={Link} to="/about">About</NavLink>
              <NavLink tag={Link} to="/topics">Topics</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>

    );
  }
}
