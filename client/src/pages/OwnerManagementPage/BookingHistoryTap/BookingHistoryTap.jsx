/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  bookingContainer,
  titleSytle,
} from "./styleComponent/bookingHistoryTapStyle"
import Popup from "./component/BookingHistoryPopup"

function BookingHistoryTap() {

  return (<>
    <div className="booking-container" css={bookingContainer}>
      <p className="title" css={titleSytle}>
        Booking History
      </p>
      <Popup />
    </div>
    </>
  );
}

export default BookingHistoryTap;
