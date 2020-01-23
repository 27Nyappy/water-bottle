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
  const [buckets, dispatchBuckets] = useReducer(reducer, [
    { capacity: 3, current:0 },
    { capacity: 4, current:0 },
    { capacity: 5, current:0 }
  ]);

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleFill = () => {
    console.log('fill');
  };

  const handleEmpty = () => {
    console.log('empty');
  };

  return (
    <>
      <Buckets buckets={buckets} handleFill={handleFill} handleEmpty={handleEmpty} />
      <TransferForm handleSubmit={handleSubmit} />
    </>
  );
};

export default Challenge;