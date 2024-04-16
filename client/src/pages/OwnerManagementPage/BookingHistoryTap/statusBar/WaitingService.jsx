/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  waitConfirmContainer,
  statusBoxFont,
} from "../styleComponent/bookingHistoryTapStyle";

function WaitingServiceStatus() {
  return (
    <div className="status-card" css={waitConfirmContainer}>
      <p className="status-info-card" css={statusBoxFont}>
        Waiting Pet Sitter for service
      </p>
    </div>
  );
}

export default WaitingServiceStatus;
