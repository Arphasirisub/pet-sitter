/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  waitConfirmContainer,
  statusBoxFont,
} from "../styleComponent/bookingHistoryTapStyle";

function CancelStatus() {
  return (
    <div className="status-card" css={waitConfirmContainer}>
      <p className="status-info-card" css={statusBoxFont}>
        Your order has been canceled
      </p>
    </div>
  );
}

export default CancelStatus;
