import React from 'react';
import PropTypes from 'prop-types';

const Bucket = ({ current, capacity }) => {
  return (
    <progress value={current} max={capacity}></progress>
  );
};

Bucket.propTypes = {
  current: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired
};

export default Bucket;