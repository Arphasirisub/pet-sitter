/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useBookingTools } from "../../../contexts/BookingTools";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [messages, setMessages] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [colorText, setColorText] = useState("");
  const { bookingId, setConfirmPayment, setConfirmStatus, setPaymentId } =
    useBookingTools();
  const param = useParams();

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    try {
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: `http://localhost:5173/booking/result/${bookingId}/${param.id}`,
        },
        redirect: "if_required",
      });

      if (result.paymentIntent) {
        console.log(result.paymentIntent);
        console.log(result.paymentIntent.id);
        console.log(result.paymentIntent.status);
        setIsLoading(true);
        setConfirmPayment(true);
        setConfirmStatus(result.paymentIntent.status);
        setPaymentId(result.paymentIntent.id);
        setMessages("Payment successfully");
        setColorText("green");
      }

      if (result.error) {
        console.log(result.error);
        setMessages(result.error.message);
        setColorText("red");
      }
    } catch (error) {
      console.error("Error payment:", error);
    }
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <Button type="submit" id="submit" disabled={isLoading}>
        Pay Now
      </Button>
      {messages && <Typography color={colorText}>{messages}</Typography>}
    </form>
  );
}
export default CheckoutForm;
