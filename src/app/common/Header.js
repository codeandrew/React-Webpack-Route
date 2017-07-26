import React from 'react';
import {  Link  } from 'react-router-dom';

export class Header extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-default">
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
    );
  }
}
