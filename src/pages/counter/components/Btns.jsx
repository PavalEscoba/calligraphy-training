import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../action';

const Btns = ({increment, decrement}) => {
  return (
    <>
      <button className='btn btn-primary' onClick={increment}>Increment</button>
      <button className='btn btn-secondary' onClick={decrement}>Decrement</button>
    </>
  )
};

export default connect(null, {increment, decrement})(Btns);