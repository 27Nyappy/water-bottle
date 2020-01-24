import React from 'react';
import PropTypes from 'prop-types';
import styles from './Bucket.css';

const Bucket = ({ current, capacity }) => {
  return (
    <progress className={styles.Bucket} value={current} max={capacity}></progress>
  );
};

Bucket.propTypes = {
  current: PropTypes.number,
  capacity: PropTypes.number
};

export default Bucket;