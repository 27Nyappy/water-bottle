import React, { useReducer, useEffect } from 'react';
import Buckets from '../components/buckets/Buckets';
import TransferForm from '../components/buckets/TransferForm';

const FILL_BUCKET = 'FILL_BUCKET';
const EMPTY_BUCKET = 'EMPTY_BUCKET';
const GET_BUCKETS = 'GET_BUCKETS';
const TRANSFER = 'TRANSFER';

function reducer(state, action) {
  switch(action.type) {
    case  FILL_BUCKET:
      return { ...state, buckets: state.buckets.map(bucket => {
        return bucket.capacity === Number(action.payload) ? { ...bucket, current: bucket.capacity } : bucket;
      }) };
    case EMPTY_BUCKET:
      return { ...state, buckets: state.buckets.map(bucket => {
        return bucket.capacity === Number(action.payload) ? { ...bucket, current: 0 } : bucket;
      }) };
    case TRANSFER:
      return 'transfer water logic';
    case GET_BUCKETS:
      return state;
  }
}

const Challenge = () => {
  const [state, dispatchState] = useReducer(reducer, {
    buckets: [
      { capacity: 3, current:0 },
      { capacity: 4, current:0 },
      { capacity: 5, current:0 },
    ],
    transferForm: '',
    transferTo: '' 
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleFill = ({ target }) => {
    console.log('fill');
    dispatchState({
      type: FILL_BUCKET,
      payload: target.name
    });
  };

  const handleEmpty = ({ target }) => {
    console.log('empty');
    dispatchState({
      type: EMPTY_BUCKET,
      payload: target.name
    });
  };

  return (
    <>
      <Buckets buckets={state.buckets} handleFill={handleFill} handleEmpty={handleEmpty} />
      <TransferForm handleSubmit={handleSubmit} />
    </>
  );
};

export default Challenge;