/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navbar from "../../public-components/Navbar";
import Stepper from "./components/Stepper";
import Detail from "./components/Detail";
import DynamicContents from "./components/DynamicContents";
import { useBookingTools } from "../../contexts/BookingTools";
import BookingResultPage from "./BookingResult/BookingResultPage";
import BookingResultPageByCard from "./BookingResult/BookingResultPageByCard";

function BookingPage() {
  const { bookingId } = useBookingTools();
  return (
    <>
      <Navbar />
      <div
        css={css`
          display: flex;
          width: 100vw;
          justify-content: center;
        `}
      >
        <div
          css={css`
            padding: 2rem;
            display: flex;
            justify-content: space-around;
            max-width: 1440px;
            width: 100%;
          `}
        >
          <div
            css={css`
              width: 60%;
              display: flex;
              flex-direction: column;
              gap: 2rem;
            `}
          >
            <Stepper />
            <DynamicContents />
          </div>
          <Detail />
        </div>
      </div>
    </>
  );
}
export default BookingPage;
