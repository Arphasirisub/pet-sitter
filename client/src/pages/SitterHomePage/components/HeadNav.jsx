import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import marieimg from "../../../PublicPicture/marieimg.png";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useAuth } from "../../../contexts/authentication";

import { FaListCheck } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const containerHeadNavStyle = css`
    background-color: #ffffff;

    height: 72px;

    padding: 0px 60px;
    display: flex;
    align-items: center;
    gap: 8px;
  `;

  const logoStyle = css`
    width: 40px;
    height: 40px;
    border-radius: 999px;
    cursor: pointer;
    object-fit: cover;
  `;

  const nameStyle = css`
    color: rgba(58, 59, 70, 1);
    font-size: 16px;
    font-weight: 500;
  `;
  const navigate = useNavigate();
  const { state, logout } = useAuth();

  const [img, setImg] = useState("");
  const getImg = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/sitters/sitterProflie`
      );

      setImg(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImg();
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="container_headnav" css={containerHeadNavStyle}>
        {img && (
          <img
            src={img.profile_img}
            alt="Profile"
            css={logoStyle}
            onClick={handleClick}
          />
        )}
        {img && <p css={nameStyle}>{img.full_name}</p>}
      </div>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => {
            navigate(`/sitter/${state.user.id}/pet-sitter-profile`);
            handleClose();
          }}
          css={petSitterMenuItemStyle}
        >
          <BsFillPersonFill />
          Pet Sitter Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate(`/sitter/${state.user.id}/booking-list`);
            handleClose();
          }}
          css={petSitterMenuItemStyle}
        >
          <FaListCheck />
          Booking List
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate(`/sitter/${state.user.id}/payout-option`);
            handleClose();
          }}
          css={petSitterMenuItemStyle}
        >
          <BsCashCoin />
          Payout Option
        </MenuItem>
        <hr></hr>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
          css={petSitterMenuItemStyle}
        >
          <RiLogoutBoxRLine />
          Log out
        </MenuItem>
      </Menu>
    </>
  );
};

const petSitterMenuItemStyle = css`
  display: flex;
  gap: 20px;
  width: 230px;
  padding-left: 30px;
  font-size: 18px;

  &:hover {
    color: rgb(255, 112, 55);
  }
`;

export default TopBar;
