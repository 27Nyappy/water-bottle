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
          <button onClick={handleFill}>Fill</button>
          <p>Transfer water to</p>
          {bucket.capacity === 3 ? <><input type="radio" name="transfer" id="three-gallon" value={bucket.capacity} />
            <label>3 Gallon Bucket</label></> : <><input type="radio" name="transfer" id="five-gallon" value={bucket.capacity} />
            <label>5 Gallon Bucket</label></>}
          <input type="radio" name="transfer" id="four-gallon" value={4} />
          <label htmlFor="four-gallon">4 Gallon Bucket</label>
          <button onClick={handleEmpty}>Empty</button>
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
    capacity: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired
  })).isRequired,
  handleFill: PropTypes.func.isRequired,
  handleEmpty: PropTypes.func.isRequired
};

export default Buckets;