import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  Link
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const newHistory = createBrowserHistory();


import { Header } from './common/Header';
import { Home } from './common/Home';
import { About } from './common/About';

require('./../scss/main.scss');


class App extends React.Component {
  render(){
    return (
      <Router history={ newHistory }>

        <switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
        </switch>
      </Router>
    );
  }
}
/*
<div className="container">
  <Header brand="Brand Text" />
  <Home />
  <div className="intro-loader">
    <h1>App test</h1>
  </div>
</div>
*/


render(
  <App/>,
  document.getElementById('app')
);
