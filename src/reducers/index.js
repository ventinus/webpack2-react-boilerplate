import { combineReducers } from 'redux';
import { routerReducer   }  from 'react-router-redux';

// import all reducers
import counters from './counters';

// export all reducers as one
const rootReducer = combineReducers({
  routing: routerReducer,
  counters
});

export default rootReducer;
