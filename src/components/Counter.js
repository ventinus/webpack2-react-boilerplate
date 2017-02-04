import React from 'react';
const { PropTypes } = React;

const Counter = ({onIncrementClick, onDecrementClick, onRemoveClick, value}) => (
  <div className="counter">
    <button className="counter__increment" onClick={ onIncrementClick } >+</button>
    <button className="counter__decrement" onClick={ onDecrementClick } >-</button>
    <button className="counter__remove" onClick={ onRemoveClick }>Remove Counter</button>
    <div className="counter__value">{ value }</div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired
};


export default Counter;
