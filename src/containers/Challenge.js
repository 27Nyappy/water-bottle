import React, { useReducer, useEffect } from 'react';
import Buckets from '../components/buckets/Buckets';
import TransferForm from '../components/buckets/TransferForm';

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