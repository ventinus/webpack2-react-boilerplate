import React from 'react';
import { connect } from 'react-redux';
import Counter from 'components/Counter';
import { addCounter } from 'actions';

const About = ({counters, addCounter}) => {
  return (
    <div>
      <h2>About Page</h2>
      <button type="button" onClick={ addCounter }>Add counter</button>
      <div className="counters">
        { counters.map((c, i) =>
          <Counter
            key={ i }
            value={ c }
            index={ i }
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

export default connect(
  mapStateToProps,
  { addCounter }
)(About);
