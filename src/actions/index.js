import types from './actionTypes';


// Counter Actions
// _____________________________

export const addCounter = () => ({
  type: types.ADD_COUNTER
});

export const removeCounter = (index) => ({
  type: types.REMOVE_COUNTER,
  index
});

export const incrementCounter = (index) => ({
  type: types.INCREMENT_COUNTER,
  index
});

export const decrementCounter = (index) => ({
  type: types.DECREMENT_COUNTER,
  index
});

