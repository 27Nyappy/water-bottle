import React, { useReducer, useEffect } from 'react';
import Buckets from '../components/buckets/Buckets';
import TransferForm from '../components/buckets/TransferForm';
import styles from './Challenge.css';

const FILL_BUCKET = 'FILL_BUCKET';
const EMPTY_BUCKET = 'EMPTY_BUCKET';
const GET_BUCKETS = 'GET_BUCKETS';
const TRANSFER_FROM = 'TRANSFER_FROM';
const TRANSFER_TO = 'TRANSFER_TO';
const COMPLETE_TRANSFER = 'COMPLETE_TRANSFER';
let from;
let to;

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
    case COMPLETE_TRANSFER:
      return { ...state, buckets: state.buckets.map(bucket => {

        if(bucket.capacity === state.transferFrom && bucket.current !== 4 && state.transferTo === 4) {
          alert('PLEASE MAKE SURE YOU HAVE EXACTLY 4 GALLONS BEFORE FILLING');
        }

        if(state.transferFrom === state.transferTo) {
          alert('CANNOT TRANSFER WATER BETWEEN THE SAME BUCKETS');
        }

        else if(bucket.capacity === state.transferFrom && bucket.current === 0) {
          alert('CANNOT TRANSFER WATER FROM AN EMPTY BUCKET');
        }

        else if(bucket.capacity === state.transferTo && bucket.current === bucket.capacity) {
          alert('BUCKET IS FULL, CANNOT TRANSFER MORE WATER INTO IT');
        }


        else {
          for(let i = 0; i < state.buckets.length; i++) {
            const currentBucket = state.buckets[i];
            if(currentBucket.capacity === state.transferFrom) {
              from = currentBucket;
            }
            else if(currentBucket.capacity === state.transferTo) {
              to = currentBucket;
              if(to.capacity > to.current) {
                let fromRemainder;
                let toRemainder;
                if(from.current !== 4 && to.capacity === 4) {
                  return currentBucket;
                }
                if(to.current === 0 && to.capacity > from.current) {
                  to['current'] = from.current;
                  from['current'] = 0;
                }
              }
            }
          }
        }
        return bucket;
      }) };
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
    console.log(state, from, to);
  }, [state]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatchState({
      type: COMPLETE_TRANSFER
    });
  };

  const handleChange = event => {
    event.preventDefault();
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