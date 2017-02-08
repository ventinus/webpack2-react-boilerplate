import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { loadState, saveState } from './localStorage';

import rootReducer from 'reducers';

const persistedState = loadState();

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
