import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransferForm.css';

const TransferForm = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.Transfer}>
      <span>Transfer from</span>
      <input type="radio" name="TRANSFER_FROM" value="3" id="from-3" onChange={handleChange} />
      <label htmlFor="from-3">3 Gallon Bucket</label>
      <input type="radio" name="TRANSFER_FROM" value="5" id="from-5" onChange={handleChange} />
      <label htmlFor="from-5">5 Gallon Bucket</label>
      <span>Transfer to</span>
      <input type="radio" name="TRANSFER_TO" value="3" id="to-3" onChange={handleChange} />
      <label htmlFor="to-3">3 Gallon Bucket</label>
      <input type="radio" name="TRANSFER_TO" value="4" id="to-4" onChange={handleChange} />
      <label htmlFor="to-4">4 Gallon Bucket</label>
      <input type="radio" name="TRANSFER_TO" value="5" id="to-5" onChange={handleChange} />
      <label htmlFor="to-5">5 Gallon Bucket</label>
      <button>Complete Transfer</button>
    </form>
  );
};

TransferForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TransferForm;