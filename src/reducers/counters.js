import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes';

// 2 Approaches - using object keys or switch statements, both of which are outlined.
// I prefer the former

// USING OBJECT KEYS
// create a SINGLE_COUNTER_MAP if each counter is more complex than a single number
// _____________________________________________

const COUNTERS_MAP = {
  [types.ADD_COUNTER]: (state, action) => {
    return [
      ...state,
      0
    ];
  },
  [types.REMOVE_COUNTER]: (state, action) => {
    return [
      ...state.slice(0, action.index),
      ...state.slice(action.index + 1)
    ];
  },
  [types.INCREMENT_COUNTER]: (state, action) => {
    return [
      ...state.slice(0, action.index),
      state[action.index] + 1,
      ...state.slice(action.index + 1)
    ];
  },
  [types.DECREMENT_COUNTER]: (state, action) => {
    return [
      ...state.slice(0, action.index),
      state[action.index] - 1,
      ...state.slice(action.index + 1)
    ];
  }
};

const counters = (state = [], action) => {
  if (!COUNTERS_MAP.hasOwnProperty(action.type)) return state;

  return COUNTERS_MAP[action.type](state, action);
}


// USING SWITCH STATEMENTS
// _____________________________________________


// const counters = (state = [], action) => {
//   switch(action.type) {
//     case types.ADD_COUNTER:
//       return [
//         ...state,
//         0
//       ];
//     case types.REMOVE_COUNTER:
//       return [
//         ...state.slice(0, state.index),
//         ...state.slice(state.index + 1)
//       ];
//     case types.INCREMENT_COUNTER:
//       return [
//          ...state.slice(0, action.index),
//          state[action.index] + 1,
//          ...state.slice(action.index + 1)
//        ];
//     case types.DECREMENT_COUNTER:
//       return [
//          ...state.slice(0, action.index),
//          state[action.index] - 1,
//          ...state.slice(action.index + 1)
//        ];
//     default: return state;
//   }
// }


export default counters;
