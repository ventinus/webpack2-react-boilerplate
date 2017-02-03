import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'

// Import reducers
import rootReducer from 'reducers';

// Import layout components
import MainLayout from './layouts/MainLayout/MainLayout';

// Import container components
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import NotFound from './containers/NotFound';

import 'index.html';

// create redux store and sync it with the browserHistory
const store = createStore(rootReducer);
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ MainLayout }>
        <IndexRoute component={ Home } />
        <Route path="about" component={ About } />
        <Route path="contact" component={ Contact } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
