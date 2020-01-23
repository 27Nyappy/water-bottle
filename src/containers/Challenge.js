import React, { useReducer, useEffect } from 'react';
import Buckets from '../components/buckets/Buckets';
import TransferForm from '../components/buckets/TransferForm';

function reducer(state, action) {
  switch(action.type) {
    case  'FILL_BUCKET':
      return 'fill bucket logic';
    case 'EMPTY_BUCKET':
      return 'empty bucket logic';
    case 'TRANSFER':
      return 'transfer water logic';
    default:
      return state;
  }
}

const Challenge = () => {
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <Buckets />
      <TransferForm handleSubmit={handleSubmit} />
    </>
  );
};

export default Challenge;