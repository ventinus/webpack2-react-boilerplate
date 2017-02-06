import React from 'react';
import { connect } from 'react-redux';
import Counter from 'components/Counter';
import types from 'actions/actionTypes';

const About = (props) => {
  const onAddCounterClick = () => {
    props.dispatch({
      type: types.ADD_COUNTER
    });
  }

  const onIncrementCounterClick = (index) => {
    props.dispatch({
      type: types.INCREMENT_COUNTER,
      index: index
    });
  }

  const onDecrementCounterClick = (index) => {
    props.dispatch({
      type: types.DECREMENT_COUNTER,
      index: index
    });
  }

  const onRemoveCounterClick = (index) => {
    props.dispatch({
      type: types.REMOVE_COUNTER,
      index: index
    });
  }

  return (
    <div>
      <h2>About Page</h2>
      <button type="button" onClick={ onAddCounterClick }>Add counter</button>
      <div className="counters">
        { props.counters.map((c, i) =>
          <Counter
            key={ i }
            value={ c }
            index={ i }
            onIncrementClick={ onIncrementCounterClick.bind(null, i) }
            onDecrementClick={ onDecrementCounterClick.bind(null, i) }
            onRemoveClick={ onRemoveCounterClick.bind(null, i) }
          />
        )}
      </div>
    </div>
  );
}

// Map Props
// ------------------------------------------------
function mapStateToProps(state) {
  return {
    counters: state.counters
  }
}

export default connect(mapStateToProps)(About);
