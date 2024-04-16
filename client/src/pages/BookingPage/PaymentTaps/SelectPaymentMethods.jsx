/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { BsWallet2 } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
function SelectPaymentMethods({ setPaymentMethods, paymentMethods }) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-evenly;
        gap: 3%;
      `}
    >
      <Button
        css={css`
          border: solid
            ${paymentMethods === "card"
              ? "rgb(255, 112, 55)"
              : "rgb(220, 223, 237)"}
            1px;
          width: 50%;
          border-radius: 50px;
          color: ${paymentMethods === "card"
            ? "rgb(255, 112, 55)"
            : "rgb(123, 126, 143)"};

          padding-top: 20px;
          padding-bottom: 20px;
          display: flex;
          gap: 10px;
        `}
        onClick={() => {
          setPaymentMethods("card");
        }}
      >
        <BsCreditCard />
        Credit Card
      </Button>
      <Button
        css={css`
          border: solid
            ${paymentMethods === "cash"
              ? "rgb(255, 112, 55)"
              : "rgb(220, 223, 237)"}
            1px;
          width: 50%;
          border-radius: 50px;
          color: ${paymentMethods === "cash"
            ? "rgb(255, 112, 55)"
            : "rgb(123, 126, 143)"};

          padding-top: 20px;
          padding-bottom: 20px;
          display: flex;
          gap: 10px;
        `}
        onClick={() => {
          setPaymentMethods("cash");
        }}
      >
        <BsWallet2 />
        Cash
      </Button>
    </div>
  );
}

export default SelectPaymentMethods;
