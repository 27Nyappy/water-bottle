
import React from 'react';
import PropTypes from 'prop-types';

const TransferForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <span>Transfer from</span>
      <input type="radio" name="transfer-from" value="3" id="from-3" />
      <label htmlFor="from-3">3 Gallon Bucket</label>
      <input type="radio" name="transfer-from" value="5" id="from-5" />
      <label htmlFor="from-5">5 Gallon Bucket</label>
      <span>Transfer to</span>
      <input type="radio" name="transfer-to" value="3" id="to-3" />
      <label htmlFor="to-3">3 Gallon Bucket</label>
      <input type="radio" name="transfer-to" value="4" id="to-4" />
      <label htmlFor="to-4">4 Gallon Bucket</label>
      <input type="radio" name="transfer-to" value="5" id="to-5" />
      <label htmlFor="to-5">5 Gallon Bucket</label>
      <button>Complete Transfer</button>
    </form>
  );
};

TransferForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default TransferForm;