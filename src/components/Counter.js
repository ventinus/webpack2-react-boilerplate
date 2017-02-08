import React from 'react';
import { connect } from 'react-redux';
import { removeCounter, incrementCounter, decrementCounter } from 'actions';
const { PropTypes } = React;

const Counter = ({onIncrementClick, onDecrementClick, onRemoveClick, index, value}) => {

  return (
    <div className="counter">
      <button className="counter__increment" onClick={ onIncrementClick.bind(null, index) } >+</button>
      <button className="counter__decrement" onClick={ onDecrementClick.bind(null, index) } >-</button>
      <button className="counter__remove" onClick={ onRemoveClick.bind(null, index) }>Remove Counter</button>
      <div className="counter__value">{ value }</div>
    </div>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired
};

// export default Counter;
export default connect(
  null,
  {
    onIncrementClick: incrementCounter,
    onDecrementClick: decrementCounter,
    onRemoveClick: removeCounter
  }
)(Counter);
