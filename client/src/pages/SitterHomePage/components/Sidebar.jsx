/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { RxPerson } from "react-icons/rx";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/authentication";
import { GoCreditCard } from "react-icons/go";
import { IoList } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import {
  containerSidebarStyle,
  sectionLogoStyle,
  fontSidebarStyle,
  sidebarStyle,
  logoutStyle,
  fontLogoutStyle,
  sectionLogoutStyle,
  iconPaymentStyle,
} from "./SidebarStyle";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activeTaps, setActiveTaps, setIsProfilePage }) => {
  const { logout } = useAuth();
  const { state, checkToken } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    checkToken();
  }, []);

  const handleClick = (key) => {
    navigate(`/sitter/${state.user.id}/${key}`);
    setActiveTaps(key);
  };

  const getSidebarItemStyle = (isActive) => css`
    ${sidebarStyle};
    background-color: ${isActive ? "rgba(255, 241, 236, 1)" : "transparent"};
    color: ${isActive ? "rgba(255, 112, 55, 1)" : "rgba(91, 93, 111, 1)"};
  `;

  return (
    <div className="container_sidebar" css={containerSidebarStyle}>
      <div className="section__logo" css={sectionLogoStyle}>
        <img
          src="/src/PublicPicture/logositter.png"
          alt="Logo"
          width="140"
          onClick={() => {
            navigate("/");
          }}
          css={css`
            cursor: pointer;
          `}
        />
      </div>

      <div className="section__sidebar-button">
        <div
          className="sidebar_petsitter"
          css={getSidebarItemStyle(activeTaps === "pet-sitter-profile")}
          onClick={() => {
            handleClick("pet-sitter-profile");
          }}
        >
          <BsFillPersonFill fontSize="24px" />
          <p css={fontSidebarStyle}>Pet Sitter Profile</p>
        </div>

        <div
          className="sidebar_booking"
          css={getSidebarItemStyle(activeTaps === "booking-list")}
          onClick={() => {
            handleClick("booking-list");
            setIsProfilePage(false);
          }}
        >
          <IoList fontSize="24px" />
          <p css={fontSidebarStyle}>Booking List</p>
        </div>

        <div
          className="sidebar_payout"
          css={getSidebarItemStyle(activeTaps === "payout-option")}
          onClick={() => {
            handleClick("payout-option");
          }}
        >
          <GoCreditCard fontSize="22px" css={iconPaymentStyle} />
          <p css={fontSidebarStyle}>Payout Option</p>
        </div>
      </div>

      <div className="section_logout" css={sectionLogoutStyle}>
        <div
          className="logout"
          css={logoutStyle}
          onClick={() => {
            logout();
          }}
        >
          <MdLogout
            css={css`
              font-size: 24px;
            `}
          />
          Log Out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
