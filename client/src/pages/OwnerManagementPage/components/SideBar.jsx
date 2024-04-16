/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BookingHistory from "../../../PublicPicture/BookingHistoryIcon.png";
import ActiveBookingHistory from "../../../PublicPicture/ActiveBookingHistoryIcon.png";
import Profile from "../../../PublicPicture/ProfileIcon.png";
import ActiveProfile from "../../../PublicPicture/ActiveProfileIcon.png";
import YourPet from "../../../PublicPicture/YourPetIcon.png";
import ActiveYourPet from "../../../PublicPicture/ActiveYourPetIcon.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/authentication";

function SideBar({
  setActiveTaps,
  activeTaps,
  setIsCreatePet,
  setIsUpdatePet,
}) {
  const { state, checkToken } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    checkToken();
  }, []);

  const handleClick = (key) => {
    navigate(`/owner/${state.user.id}/${key}`);
    setActiveTaps(key);
    setIsCreatePet(false);
    setIsUpdatePet(false);
  };

  return (
    <>
      <div
        css={css`
          width: 18%;
          height: 200px;
          background-color: rgb(255, 255, 255);
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          padding-top: 10px;
          padding-bottom: 10px;
        `}
      >
        <div
          css={css`
            height: 25%;
            display: flex;
            align-items: center;
            padding-left: 10%;
            font-weight: bold;
          `}
        >
          Account
        </div>
        <HoverItem
          imageSrc={Profile}
          activeImageSrc={ActiveProfile}
          text="Profile"
          isActive={activeTaps === "profile"}
          handleClick={() => handleClick("profile")}
        />
        <HoverItem
          imageSrc={YourPet}
          activeImageSrc={ActiveYourPet}
          text="Your Pet"
          isActive={activeTaps === "yourPet"}
          handleClick={() => handleClick("yourPet")}
        />
        <HoverItem
          imageSrc={BookingHistory}
          activeImageSrc={ActiveBookingHistory}
          text="Booking History"
          isActive={activeTaps === "bookingHistory"}
          handleClick={() => handleClick("bookingHistory")}
        />
      </div>
    </>
  );
}

const HoverItem = ({
  imageSrc,
  activeImageSrc,
  text,
  isActive,
  handleHover,
  handleClick,
}) => (
  <div
    css={css`
      height: 25%;
      display: flex;
      align-items: center;
      padding-left: 10%;
      gap: 5%;
      &:hover {
        cursor: pointer;
        background-color: #eeeeee;
      }
      ${isActive &&
      css`
        background-color: rgb(255, 241, 236);
        color: rgb(255, 112, 55);
      `}
    `}
    onMouseEnter={handleHover}
    onClick={handleClick}
  >
    <img src={isActive ? activeImageSrc : imageSrc} alt={text} />
    {text}
  </div>
);

export default SideBar;
