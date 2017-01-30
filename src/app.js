import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import App from 'components/App';
import Another from 'components/Another';
import store from 'store';

import 'index.html';

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Another />
    </App>
  </Provider>,
  document.getElementById('root')
);
