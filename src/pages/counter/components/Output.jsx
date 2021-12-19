import React from 'react';
import { connect } from 'react-redux';

const Output = ({count}) => {
  return <p>Output: {count} </p>
}

const mapStateTotProps = (state) => {
  return {count: state.count};
};

export default connect(mapStateTotProps)(Output);