/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  statusBoxFont,
  inServiceContainer,
  phonestyle,
} from "../styleComponent/bookingHistoryTapStyle";
import phone from "../../../../PublicPicture/phone.png";

function InServiceStatus({ ownerBookings }) {
  function callPhoneNumber(phoneNumber) {
    window.location.href = "tel:" + phoneNumber;
  }
  return (
    <div className="status-card" css={inServiceContainer}>
      <p className="status-info-card" css={statusBoxFont}>
        Your pet is already Pet Sitter care
      </p>
      <img
        css={phonestyle}
        src={phone}
        alt="Phone Icon"
        onClick={() => callPhoneNumber(ownerBookings.phone)}
      />
    </div>
  );
}

export default InServiceStatus;
