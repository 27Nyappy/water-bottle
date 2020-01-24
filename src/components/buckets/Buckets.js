import React from 'react';
import PropTypes from 'prop-types';
import Bucket from './Bucket';

const Buckets = ({ buckets, handleFill, handleEmpty }) => {
  const bucketElements = buckets.map(bucket => {
    if(bucket.capacity === 4) {
      return (
        <li key={bucket.capacity}>
          <h2>{bucket.capacity} Gallons</h2>
          <Bucket 
            current={bucket.current}
            capacity={bucket.capacity}
          />
        </li>
      );
    }
    else {
      return (
        <li key={bucket.capacity}>
          <h2>{bucket.capacity} Gallons</h2>
          <Bucket 
            current={bucket.current}
            capacity={bucket.capacity}
          />
          <button name={bucket.capacity} onClick={handleFill}>Fill</button>
          <button name={bucket.capacity} onClick={handleEmpty}>Empty</button>
        </li>
      );
    }
  });
  return (
    <ul>
      {bucketElements}
    </ul>
  );
};

Buckets.propTypes = {
  buckets: PropTypes.arrayOf(PropTypes.shape({
    capacity: PropTypes.number,
    current: PropTypes.number
  })),
  handleFill: PropTypes.func,
  handleEmpty: PropTypes.func
};

export default Buckets;