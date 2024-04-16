/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  waitConfirmContainer,
  statusBoxFont,
  buttonReview,
} from "../styleComponent/bookingHistoryTapStyle";
import axios from "axios";

function WaitingConfirmStatus({ booking }) {
  // const handleDeleteBooking = async () => {
  //   await axios.delete(`http://localhost:4000/bookings/${booking.id}`);
  // };
  return (
    <>
      <div className="status-card" css={waitConfirmContainer}>
        <p className="status-info-card" css={statusBoxFont}>
          Waiting Pet Sitter for confirm booking
        </p>
        {/* <button css={buttonReview} onClick={handleDeleteBooking}>
          Cancel
        </button> */}
      </div>
    </>
  );
}

export default WaitingConfirmStatus;
