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
import { Topics } from './common/Topics';
import { Footer } from './common/Footer';

require('./../scss/main.scss');
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
//require('bootstrap/dist/css/bootstrap.css');

class App extends React.Component {
  render(){
    return (
      <Router history={ newHistory }>
        <div>
          <Header />
          <switch>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/topics" component={ Topics } />
          </switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

render(
  <App/>,
  document.getElementById('app')
);
