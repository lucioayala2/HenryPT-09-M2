import React from 'react';
import { connect } from 'react-redux';
import {increment,decrement, set} from '../actions';

function ActionCounter(props) {
  function handleReset() {
    props.set(0)
  }  

  return (
    <div>
        <button onClick={() => props.increment()} >+</button>
        <button onClick={() => props.decrement()} >-</button>
        <button onClick={handleReset}>RESET</button>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        set: (value) => dispatch(set(value)),
    };
}
export default connect(null, mapDispatchToProps)(ActionCounter); 