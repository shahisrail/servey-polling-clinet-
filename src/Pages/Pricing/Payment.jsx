/* eslint-disable no-unused-vars */
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutFrom from './CheckOutFrom';

const stripePromise = loadStripe(
  "pk_test_51OEuuJKc6cWjkGN6RhsqaWZwdwcuSTobn6P9BH7cDb1rGNpI1upoW8sHRQ4ht8qJo5Mwe0ZNoz36ng5bVA1wQVyj00twL0IPBC"
);
const Payment = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckOutFrom></CheckOutFrom>
     </Elements>
    </div>
  );
};

export default Payment;