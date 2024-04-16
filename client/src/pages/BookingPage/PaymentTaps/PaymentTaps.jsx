/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { useState } from "react";
import SelectPaymentMethods from "./SelectPaymentMethods";
import { useBookingTools } from "../../../contexts/BookingTools";
import Card from "./Card";
import Cash from "./Cash";
import ConfirmModal from "./ConfirmModal";

function PaymentTaps() {
  // const [paymentMethods, setPaymentMethods] = useState("card");
  const [show, setShow] = useState(false);
  const {
    setActiveSteps,
    setCompleteStep,
    completeStep,
    paymentMethods,
    setPaymentMethods,
    confirmStatus,
  } = useBookingTools();

  const handleSubmit = async () => {
    setShow(true);
  };

  const handleBackButton = () => {
    if (confirmStatus === "succeeded") {
      setShow(false);
      alert("การชำระเงินสำเร็จแล้ว กรุณากด Confirm Booking");
    } else {
      setCompleteStep({
        ...completeStep,
        payment: false,
      });
      setActiveSteps("information");
    }
  };

  return (
    <>
      <div
        css={css`
          height: fit-content;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          padding: 50px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        `}
      >
        <SelectPaymentMethods
          setPaymentMethods={setPaymentMethods}
          paymentMethods={paymentMethods}
        />
        {paymentMethods === "card" && <Card />}
        {paymentMethods === "cash" && <Cash />}
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <Button
            css={css`
              padding: 10px;
              padding-left: 25px;
              padding-right: 25px;
              border-radius: 25px;
              color: rgb(255, 112, 55);
              background-color: rgb(255, 241, 236);
              transition: color 0.3s ease;
              &:hover {
                color: black;
              }
            `}
            onClick={handleBackButton}
          >
            Back
          </Button>
          <Button
            css={css`
              padding: 10px;
              padding-left: 25px;
              padding-right: 25px;
              border-radius: 25px;
              color: rgb(255, 241, 236);
              background-color: rgb(255, 112, 55);
              transition: color 0.3s ease;
              &:hover {
                color: black;
              }
            `}
            onClick={handleSubmit}
          >
            Confirm Booking
          </Button>
        </div>
      </div>
      <ConfirmModal
        show={show}
        setShow={setShow}
        paymentMethods={paymentMethods}
      />
    </>
  );
}
export default PaymentTaps;
