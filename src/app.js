import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'

import store from 'store';

// Import layouts
import Layout from './layouts/Layout';

// Import containers
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';

import 'index.html';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ Layout }>
        <Route path="about" component={ About } />
        <Route path="contact" component={ Contact } />
        <IndexRoute component={ Home } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
