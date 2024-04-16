/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import BookingHistoryCard from "./BookingHIstoryCard";
import {
  cardContainer,
  popupStyle,
  titleStyle,
  headBar,
  closeButton,
  transactionFontStyle,
  statusStyle,
  transactionContainer,
  columnLayout,
  sitterNameTitle,
  sitterNameData,
  dateTimeContainer,
  line,
  totalContainer,
} from "../styleComponent/PopupCardStyle";
import { useState } from "react";
import { useMyHistoryTools } from "../../../../contexts/myHistoryTools";
import axios from "axios";
function Popup() {
  const [open, setOpen] = useState(false);
  const handleOpen = (booking) => {
    setOpen(true);
    setSelectedBooking(booking);
  };
  const handleClose = () => setOpen(false);
  const { selectedBooking, setSelectedBooking, getHistory } =
    useMyHistoryTools();
  const handleCancleBooking = async () => {
    await axios.put(
      `http://localhost:4000/bookings/cancel/${selectedBooking.id}`
    );
    setOpen(false);
    getHistory();
  };

  return (
    <div className="cardContainer" css={cardContainer}>
      <div>
        <BookingHistoryCard
          handleOpen={handleOpen}
          selectedBooking={selectedBooking}
          setSelectedBooking={setSelectedBooking}
        />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="popup-container" css={popupStyle}>
          <div className="head-bar" css={headBar}>
            <p className="title-Style" css={titleStyle}>
              Booking Detail
            </p>
            <button
              className="close-button"
              css={closeButton}
              onClick={handleClose}
            >
              x
            </button>
          </div>

          <div
            css={css`
              margin: 10px;
            `}
          >
            <p className="status-style" css={statusStyle}>
              ⏺ {selectedBooking.status}
            </p>
            <div css={transactionContainer}>
              <p className="transaction-style" css={transactionFontStyle}>
                Transactiob Date: {selectedBooking.transaction_date}
              </p>
              <p className="transaction-style" css={transactionFontStyle}>
                Transaction No. : {selectedBooking.id}
              </p>
            </div>
            <div className="pet-sitter-container" css={columnLayout}>
              <p className="sitter-name-title" css={sitterNameTitle}>
                Pet Sitter:
              </p>
              <p className="sitter-name-data" css={sitterNameData}>
                {selectedBooking.sitters && selectedBooking.sitters.trade_name}{" "}
                By{" "}
                {selectedBooking.sitters && selectedBooking.sitters.full_name}
              </p>
            </div>
            <div className="date-time-container" css={dateTimeContainer}>
              <div>
                <p className="date-time-title" css={sitterNameTitle}>
                  Date & Time:
                </p>
                <p className="date-time-font-style" css={sitterNameData}>
                  {selectedBooking.booked_date}
                  <span
                    css={css`
                      margin: 0px 5px;
                    `}
                  >
                    |
                  </span>
                  {selectedBooking.booked_time}
                </p>
              </div>
              <div
                css={css`
                  flex-basis: 200px;
                `}
              >
                <p className="duration-font-style" css={sitterNameTitle}>
                  Duration
                </p>
                <p className="hour-font-style" css={sitterNameData}>
                  {selectedBooking.duration}
                </p>
              </div>
            </div>
            <div className="column-layout" css={columnLayout}>
              <p className="pet-name-title" css={sitterNameTitle}>
                Pet:
              </p>
              <p className="pet-name-list" css={sitterNameData}>
                {selectedBooking.pet_booking &&
                  selectedBooking.pet_booking.map((pet, index) => (
                    <span key={index}>
                      {pet.pet_id.pet_name}
                      {index !== selectedBooking.pet_booking.length - 1 && ", "}
                    </span>
                  ))}
              </p>
            </div>
            <hr className="line" css={line} />
            <div className="total-container" css={totalContainer}>
              <p className="total-title" css={sitterNameData}>
                Total:
              </p>
              <p className="price-font-style" css={sitterNameData}>
                {selectedBooking.price}
              </p>
            </div>
          </div>
          {selectedBooking.status === "Waiting for confirm" && (
            <div
              css={css`
                display: flex;
                justify-content: center;
              `}
            >
              <div
                css={css`
                  display: flex;
                  justify-content: center;
                  cursor: pointer;
                  background-color: rgb(255, 112, 55);
                  padding: 10px;
                  border-radius: 15px;
                  &:hover {
                  }
                  color: white;
                `}
                onClick={handleCancleBooking}
              >
                Cancel
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default Popup;
