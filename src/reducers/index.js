import { combineReducers } from 'redux';
import { routerReducer   }  from 'react-router-redux';

// import all reducers
import sample from './sample';

// export all reducers as one
const rootReducer = combineReducers({
  routing: routerReducer,
  sample
});

export default rootReducer;
