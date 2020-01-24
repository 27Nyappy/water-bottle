import React, { useReducer, useEffect } from 'react';
import Buckets from '../components/buckets/Buckets';
import TransferForm from '../components/buckets/TransferForm';
import styles from './Challenge.css';

const FILL_BUCKET = 'FILL_BUCKET';
const EMPTY_BUCKET = 'EMPTY_BUCKET';
const GET_BUCKETS = 'GET_BUCKETS';
const TRANSFER_FROM = 'TRANSFER_FROM';
const TRANSFER_TO = 'TRANSFER_TO';

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
    case TRANSFER_FROM:
      return { ...state, transferFrom: Number(action.payload) };
    case TRANSFER_TO:
      return { ...state, transferTo: Number(action.payload) };
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
    transferFrom: '',
    transferTo: '' 
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event);
  };

  const handleChange = event => {
    event.preventDefault();
    console.log(event);
    dispatchState({
      type: event.target.name,
      payload: event.target.value
    });
  };

  const handleFill = ({ target }) => {
    dispatchState({
      type: FILL_BUCKET,
      payload: target.name
    });
  };

  const handleEmpty = ({ target }) => {
    dispatchState({
      type: EMPTY_BUCKET,
      payload: target.name
    });
  };

  return (
    <div className={styles.Challenge}>
      <h2>Instructions</h2>
      <p>You have three buckets. A 3 gallon bucket, a 5 gallon bucket and a 4 gallon bucket. Given an endless water supply, use the 3 gallon and 5 gallon buckets to fill the 4 gallon bucket, once you have exactly measured 4 gallons you are ready to transfer the water into the 4 gallon bucket. Your actions are limited to fill, transfer and empty.</p>
      <Buckets buckets={state.buckets} handleFill={handleFill} handleEmpty={handleEmpty} />
      <TransferForm handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  );
};

export default Challenge;