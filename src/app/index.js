import React from "react";
import { render } from "react-dom";


import { Header } from './common/Header';
import { Home } from './common/Home';

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <Header brand="Brand Text" />
        <Home />
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

render(
  <App text="App test!"/>,
  document.getElementById('app')
);
