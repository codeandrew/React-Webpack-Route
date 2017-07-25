import React from 'react';

export class Header extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <div className="navbrand">
              <h1>{this.props.brand}</h1>
            </div>
            <ul className="nav navbar-nav">
              <li><a href="">Home </a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
