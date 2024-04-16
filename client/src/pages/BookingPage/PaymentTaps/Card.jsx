import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import { useBookingTools } from "../../../contexts/BookingTools";
import { useParams } from "react-router-dom";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripe = await loadStripe(
  "pk_test_51OjVWPDwx8QQepr8skWEKyKINrco0Yb3INjVGrOoyYOubhmF4MXH5qaeiKTnzlGqZOyT84KbEOfqlXKX7evJJgSD00WcxbUHVO"
);

export default function Card() {
  const [clientSecret, setClientSecret] = useState("");
  const { totalPrice, bookingId } = useBookingTools();
  const params = useParams();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4000/payments/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: parseFloat(totalPrice) * 100,
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripe}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
