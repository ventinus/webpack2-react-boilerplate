import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import store from 'store';

// Import reducers
import rootReducer from 'reducers';

// Import layout components
import MainLayout from 'layouts/MainLayout';

// Import container components
import Home from 'containers/Home';
import Home2 from 'containers/Home2';
import About from 'containers/About';
import Contact from 'containers/Contact';
import NotFound from 'containers/NotFound';

import 'index.html';

// create redux store and sync it with the browserHistory
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ MainLayout }>
        <IndexRoute component={ Home } />
        <Route path="about" component={ About } />
        <Route path="contact" component={ Contact } />
      </Route>
      <Route path="/nested" component={ MainLayout }>
        <Route path="home" component={ Home2 } />
      </Route>
      <Route path="*" component={ NotFound } />
    </Router>
  </Provider>,
  document.getElementById('root')
);
