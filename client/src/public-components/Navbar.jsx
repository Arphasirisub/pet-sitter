/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import sitterlogo from "../PublicPicture/sitter-logo.svg";
import { useAuth } from "../contexts/authentication";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useEffect, useState } from "react";
import axios from "axios";

import { BsFillPersonFill } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdOutlinePets } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";

function Navbar() {
  const navigate = useNavigate();
  const { logout, state, checkToken } = useAuth();
  const [ownerData, setOwnerData] = useState({});
  const [sitterData, setSitterDatta] = useState({});

  const getOwnerData = async () => {
    try {
      const result = await axios.get(`http://localhost:4000/owners/myProfile`);
      // console.log(result);
      setOwnerData(result.data.data.data);
    } catch (error) {
      console.error("Error while fetching available pet types:", error);
    }
  };

  const getSitterData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/sitters/sitterProflie`
      );
      // console.log(result.data);
      console.log(result);
      setSitterDatta(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      if (state.user?.role === "pet_owner") {
        getOwnerData();
      } else if (state.user?.role === "pet_sitter") {
        getSitterData();
      }
    }
  }, [state]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          padding: 15px 0px;
          width: 1140px;
        `}
      >
        <div
          onClick={() => {
            navigate("/");
            window.location.reload();
          }}
          css={css`
            &:hover {
              cursor: pointer;
            }
          `}
        >
          <img src={sitterlogo} alt="Sitter Logo" />
        </div>
        <div
          css={css`
            display: flex;
            gap: 1rem;
            justify-content: center;
            align-items: center;
          `}
        >
          {state.isAuthenticated ? (
            <>
              <div>{ownerData.full_name || sitterData.full_name}</div>
              <img
                src={ownerData.profile_img || sitterData.profile_img}
                alt="Profile"
                css={css`
                  width: 40px;
                  height: 40px;
                  cursor: pointer;
                  border-radius: 100%;
                  object-fit: cover;
                `}
                onClick={handleClick}
              />

              {state.user?.role === "pet_owner" && (
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
                      navigate(`/owner/${state.user.id}/profile`);
                      handleClose();
                    }}
                    css={petOwnerMenuItemStyle}
                  >
                    <BsFillPersonFill />
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate(`/owner/${state.user.id}/yourPet`);
                      handleClose();
                    }}
                    css={petOwnerMenuItemStyle}
                  >
                    <MdOutlinePets />
                    Your Pet
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate(`/owner/${state.user.id}/bookingHistory`);
                      handleClose();
                    }}
                    css={petOwnerMenuItemStyle}
                  >
                    <MdHistory />
                    History
                  </MenuItem>
                  <hr></hr>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      logout();
                    }}
                    css={petOwnerMenuItemStyle}
                  >
                    <RiLogoutBoxRLine />
                    Log out
                  </MenuItem>
                </Menu>
              )}

              {state.user?.role === "pet_sitter" && (
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
              )}
            </>
          ) : (
            <div
              css={css`
                &:hover {
                  cursor: pointer;
                }
              `}
              onClick={() => {
                navigate("/login");
              }}
            >
              <div>Login</div>
            </div>
          )}

          <div>
            <Button
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={() => {
                navigate("/list");
              }}
              css={css`
                background-color: #ff7037;
                font-family: "Satoshi", sans-serif;
                font-weight: 700;
                font-size: 16px;
                text-align: center;
                color: white;
                font-size: 12px;
                padding: 10px; /* Adjust padding for responsiveness */
                border-radius: 20px; /* Adjust border-radius for responsiveness */
                transition: background-color 0.3s ease;
                text-transform: none;

                &:hover {
                  color: black;
                }
                padding: 12px 24px 12px 24px;
                border-radius: 99px;
                border: none;
                cursor: pointer;
                margin-left: 20px;
                gap: 8px;
              `}
            >
              Find A Pet Sitter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const petOwnerMenuItemStyle = css`
  display: flex;
  gap: 10px;
  width: 186px;
  padding-left: 30px;
  font-size: 18px;

  &:hover {
    color: rgb(255, 112, 55);
  }
`;

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

export default Navbar;
