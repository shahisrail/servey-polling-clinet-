/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import UseAxiosHoks from "../../Hooks/UseAxiosHoks";

import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";


const CheckOutFrom = () => {
  const { user } = UseAuth();

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [tranjectoin, setTranjectoinId] = useState("");
  const axiosSecure = UseAxiosHoks();

  const totalPrice = 33.5;

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
      .catch((error) => {
        console.error("Error fetching client secret:", error);
      });
  }, [axiosSecure, totalPrice]);

  const handelSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment error", error);
      setError(error.message);
    } else {
      console.log("Payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anounymus",
            name: user?.displayName || "anounymus",
          },
        },
      });

    if (confirmError) {
      console.log("confirmed error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("tranjectoin is", paymentIntent.id);
        setTranjectoinId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          eamil: user.email,
          price: totalPrice,
          tranjectoin: paymentIntent.id,
          date: new Date(),
          // role: "pro user",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);
        if (res.data?.paymentResult?.inserteId) {
          Swal.fire({
            title: "payment!",
            text: "Your payment has been done.",
            icon: "success",
          });
        }
      }
    }
  };
  //  console.log("Your tranjectoin id",{tranjectoin.id});

  return (
    <form onSubmit={handelSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary my-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-500 text-2xl"> {error} </p>

      <p className="text-red-600"> {error} </p>
      {tranjectoin && (
        <p className="text-green-600">Your tranjectoin id {tranjectoin} </p>
      )}
    </form>
  );
};

export default CheckOutFrom;
