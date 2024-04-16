/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useBookingTools } from "../../../contexts/BookingTools";
import { useParams } from "react-router-dom";

import { useEffect } from "react";

function Detail() {
  const { selectedPets, sitterData, totalPrice, setTotalPrice } =
    useBookingTools();
  const { start, end } = useParams();

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  function formatTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  }

  function formatDateTime(startTimestamp, endTimestamp) {
    const startDate = formatDate(startTimestamp);
    const startTime = formatTime(startTimestamp);
    const endTime = formatTime(endTimestamp);

    return `${startDate} | ${startTime} - ${endTime}`;
  }

  useEffect(() => {
    // Calculate duration
    const durationInMs = Math.abs(Number(end) - Number(start));
    const durationInHours = durationInMs / (1000 * 60 * 60);

    // Calculate total price
    const totalPrice = selectedPets.length * durationInHours * 100;
    setTotalPrice(totalPrice);
  }, [selectedPets, start, end, setTotalPrice]);

  const formattedDateTime = formatDateTime(Number(start), Number(end));
  const durationInMs = Math.abs(Number(end) - Number(start));
  const durationInHours = durationInMs / (1000 * 60 * 60);
  const formattedDuration = durationInHours.toFixed(1); // Format to one decimal place

  return (
    <div
      css={css`
        width: 27%;
        height: 484px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          height: 80px;
          border-bottom: 2px solid rgba(243, 243, 2431);
          justify-content: center;
          padding-left: 20px;
          font-size: 24px;
          font-weight: bold;
        `}
      >
        Booking Detail
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          padding-left: 20px;
          height: 324px;
        `}
      >
        <div>
          <div
            css={css`
              font-size: 14px;
              color: rgb(123, 126, 143);
            `}
          >
            Petsitter:
          </div>
          <div>
            {sitterData.trade_name} by {sitterData.full_name}
          </div>
        </div>
        <div>
          <div
            css={css`
              font-size: 14px;
              color: rgb(123, 126, 143);
            `}
          >
            Date & Time:
          </div>
          <div>{formattedDateTime}</div>
        </div>
        <div>
          <div
            css={css`
              font-size: 14px;
              color: rgb(123, 126, 143);
            `}
          >
            Duration:
          </div>
          <div>{formattedDuration} Hours</div>
        </div>
        <div>
          <div
            css={css`
              font-size: 14px;
              color: rgb(123, 126, 143);
            `}
          >
            Pet:
          </div>
          <div>
            {selectedPets.length > 0 ? (
              <>
                {selectedPets.map((pet, index) => (
                  <span key={index}>
                    {pet.pet_name}
                    {index !== selectedPets.length - 1 && ", "}
                  </span>
                ))}
              </>
            ) : (
              <div>-</div>
            )}
          </div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          background-color: black;
          height: 80px;
          border-bottom: 2px solid rgba(243, 243, 2431);
          align-items: center;
          justify-content: space-between;
          padding-left: 20px;
          padding-right: 20px;
          color: white;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        `}
      >
        <div>Total</div>
        <div>{totalPrice}.00 THB</div>
      </div>
    </div>
  );
}
export default Detail;
