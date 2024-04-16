/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  successContainer,
  successfont,
  successLayoutBox,
  successTimefont,
} from "../styleComponent/bookingHistoryTapStyle";
import ReadYourReview from "../component/PopupYourReview";
import axios from "axios";


function GetReviewRating({ booking }) {


  return (
    <div className="status-card" css={successContainer}>
      <div css={successLayoutBox}>
        <p className="status-info-card" css={successfont}>
          Success date:
        </p>
        <div className="date-time-data-style" css={successTimefont}>
          {booking.stop_book_date}
          <span
            css={css`
              color: #1ecd83;
              margin: 0px 6px;
            `}
          >
            |
          </span>
          {booking.stop_book_time}
        </div>
      </div>

      <ReadYourReview booking={booking} />
    </div>
  );
}
export default GetReviewRating;
