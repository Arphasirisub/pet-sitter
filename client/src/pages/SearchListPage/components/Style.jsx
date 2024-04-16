/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const greenStar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M8.14319 1.42372C8.53185 0.777902 9.46815 0.777901 9.85681 1.42372L12.0731 5.10651C12.2128 5.33853 12.4405 5.504 12.7043 5.56509L16.8918 6.53491C17.6261 6.70498 17.9154 7.59545 17.4213 8.16466L14.6036 11.4106C14.4261 11.6151 14.3391 11.8828 14.3625 12.1526L14.7342 16.4347C14.7994 17.1857 14.0419 17.736 13.3478 17.442L9.39009 15.7653C9.14076 15.6596 8.85924 15.6596 8.60991 15.7653L4.65216 17.442C3.95813 17.736 3.20065 17.1857 3.26582 16.4347L3.63745 12.1526C3.66087 11.8828 3.57387 11.6151 3.39637 11.4106L0.578707 8.16466C0.0845982 7.59545 0.373929 6.70498 1.10824 6.53491L5.29567 5.56509C5.55948 5.504 5.78723 5.33853 5.92685 5.10652L8.14319 1.42372Z"
      fill="#1CCD83"
    />
  </svg>
);

export const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const headingContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1440px;
`;

export const headingStyles = css`
  display: flex;
  margin: 40px 0px 80px 100px;
  text-align: start;
  font-weight: 700;
  font-size: 22px;
  color: #3a3b46;
  width: 1440px;
`;

export const seachLishContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  top: 30px;
  width: 100vw;
  width: 1440px;
`;

export const sticky = css`
  display: flex;
  position: sticky;
`;

export const searchBox = css`
  display: flex;
  position: sticky;
  top: 30px;
  flex-direction: column;
  border-radius: 20px;
  width: 350px;
  height: 490px;
  box-shadow: 5px 5px 5px 6px rgba(237, 237, 237, 0.5);
  padding: 24px;
  /* margin: 0px 0px 50px 0px; */
  background-color: white;
  z-index: 1;
  margin-bottom: 30px;
`;

export const searchInputStyle = css`
  border: solid 1px #dcdfed;
  width: 310px;
  height: 30px;
  border-radius: 8px;
  padding: 6px 20px;
  position: relative;

  :focus {
    outline: none;
  }
`;

export const searchIconStyle = css`
  position: absolute;
  margin-top: -34px;
  margin-left: 320px;
  width: 20px;
  height: 20px;
`;

export const text = css`
  margin: 15px 0px 5px 15px;
  font-weight: 600;
  text-align: start;
  font-size: 14px;
  margin: 15px;
  margin-left: 0px;
  color: #3a3b46;
`;

export const checkBoxLaout = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: -10px;
`;

export const checkBoxText = css`
  font-size: 14px;
  margin-top: 11px;
  margin-right: 15px;
`;

export const flexRowRating = css`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 10px;
`;
export const numberRating = css`
  margin-left: 7px;
  color: #7b7e8f;
  margin-right: 7px;
  font-size: 14px;
`;

export const flip = css`
  display: flex;
  width: 100px;
  flex-direction: row-reverse;
`;

export const starLayout = css`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;

export const inputStyles = css`
  width: 100%;
  padding: 10px;
  border: solid 1px #dcdfed;
  border-radius: 8px;
  cursor: pointer;
  color: rgba(123, 126, 143, 1);

  :focus {
    outline: none;
  }
`;

export const buttonContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;
export const clearButton = css`
  border: solid 1px #fff1ec;
  background-color: #fff1ec;
  border-radius: 50px;
  width: 160px;
  height: 48px;
  color: #ff7037;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #fbd1c2;
    border: 2px solid #fbd1c2;
  }
`;
export const searchButton = css`
  border: solid 1px #ff7037;
  background-color: #ff7037;
  border-radius: 50px;
  width: 160px;
  height: 48px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #ff9100;
    border: 2px solid #ff9100;
  }
`;
export const paginationContainer = css`
  /* width: 100vw; */
  display: flex;
  flex-direction: row;
  margin: 70px 0px 80px 0px;
  justify-content: center;
  align-items: center;
`;
export const rightbox = css`
  border: solid 1px #fafafb;
  background-color: #fafafb;
  width: 750px;
  margin-top: -10px;
  padding: 10px 0px 10px 10px;
  display: flex;
`;

export const sitterListCotainer = css`
  display: flex;
  border-radius: 10px;
  border-radius: 10px;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
  height: 100%;
`;
export const sitterInfoBox = css`
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  width: 700px;
  padding: 15px;
  box-shadow: 5px 5px 5px 6px rgba(242, 242, 242, 0.5);
  background-color: white;
  justify-content: center;
`;

export const SitterNameContainer = css`
  display: flex;
  flex-direction: column;
  margin-left: -30px;
  margin-right: 90px;
  width: 107px;
`;

export const infoLayout = css`
  display: flex;
  flex-direction: column;
`;

export const nameLayout = css`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export const locationLayout = css`
  display: flex;
  flex-direction: row;
  margin: 15px 40px;
  margin: 15px 40px;
  align-items: center;
  gap: 4px;
`;

export const petTypeContainer = css`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
`;

export const petTypeIcon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 25px;
  border-radius: 99px;
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
`;

export const imgProflie = css`
  width: 50px;
  height: 50px;
  margin-left: 40px;
  border-radius: 100px;
`;

export const dogIconStyle = css`
  border: solid 1px #1ccd83;
  background-color: #e7fdf4;
  color: #1ccd83;
`;

export const catIconStyle = css`
  border: solid 1px #fa8ac0;
  background-color: #fff0f1;
  color: #fa8ac0;
`;

export const birdIconStyle = css`
  border: solid 1px #76d0fc;
  background-color: #ecfbff;
  color: #76d0fc;
`;

export const rabbitIconStyle = css`
  border: solid 1px #ff986f;
  background-color: #fff5ec;
  color: #ff986f;
`;

export const addressText = css`
  color: #7b7e8f;
  font-size: 14px;
`;

export const imageGalleryStyle = css`
  width: 238px;
  height: 170px;
  border-radius: 18px;
`;

export const checkboxStyles = {
  color: "#c8ccdb",
  "&.Mui-checked": {
    color: "#ff7038",
  },
  "&:hover": {
    color: "#ffb899",
  },
  "&.Mui-focusVisible": {
    "&.Mui-checked": {
      color: "#ff7038",
    },
  },
};

export const optionDisable = css`
  color: rgba(123, 126, 143, 1);
`;
