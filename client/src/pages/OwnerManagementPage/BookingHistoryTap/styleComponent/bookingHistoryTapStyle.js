/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const bookingContainer = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
`;
export const titleSytle = css`
  display: flex;
  font-weight: 700;
  margin: 40px;
  font-size: 24px;
`;

export const boxContainer = css`
  display: flex;
  flex-direction: column;
  border: solid 1px #e8e9f3;
  height: 255px;
  border-radius: 15px;
  margin: 15px 40px;
  cursor: pointer;

  &:hover {
    border-color: #76d0fc;
  }
`;
export const imgNameContainer = css`
  display: flex;
  justify-content: space-around;
`;
export const rowLayout = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px;
`;

export const imageProflie = css`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  margin: 3px 10px;
  flex-basis: 300px;
`;
export const sitterNameContainer = css`
  display: flex;
  flex-direction: column;

  /* margin: 4px 0px 0px -500px; */
  flex-basis: 500px;
`;
export const tradeNameStyle = css`
  margin: 0px;
  font-weight: 600;
  font-size: 15px;
`;

export const fontsStyle = css`
  font-size: 13px;
  margin-top: 4px;
  width: 300px;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
  flex-basis: 400px;
`;

export const transactionStyle = css`
  margin: 4px;
  font-size: 12px;
  color: #c2c5d2;
  margin-left: auto;
`;

export const statusStyle = css`
  margin-top: 7px;
  font-size: 12px;
  margin-left: auto;
`;

export const line = css`
  border: solid 0.5px #e8e9f3;
  width: 95%;
  margin-top: -10px;
`;

export const dateTimeRowLayout = css`
  display: flex;
  flex-direction: row;
  margin: 0px 25px 20px 30px;
  justify-content: space-between;
`;

export const dateTimeTitle = css`
  font-size: 13px;
  color: #7b7e8f;
  margin-bottom: 5px;
`;
export const dateTimeFont = css`
  font-size: 13px;
  color: #3a3b46;
  font-weight: 500;
`;

export const perpendicular = css`
  display: flex;
  border: solid 0.5px #dcdfed;
  height: 60px;
  width: 0px;
  margin: 0px 10px;
`;

export const detailFont = css`
  font-size: 13px;
  color: #3a3b46;
  font-weight: 500;
  margin-top: 0px;
`;

export const detailBox = css`
  display: flex;
  flex-direction: column;
`;

export const waitConfirmContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 25%;
  background-color: #f6f6f9;
  margin: 0px 25px 20px 25px;
  border-radius: 10px;
`;

export const statusBoxFont = css`
  margin: 15px 20px;
  font-size: 13px;
  color: #78797f;
`;

export const hourPetTypeContainer = css`
  display: flex;
  flex-basis: 300px;
`;

export const inServiceContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 25%;
  background-color: #f6f6f9;
  margin: 0px 25px 20px 25px;
  border-radius: 10px;
`;

export const phonestyle = css`
  width: 20px;
  height: 20px;
  background-color: #fff1ec;
  padding: 10px;
  border-radius: 100px;
  margin-right: 10px;
`;

export const successContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 25%;
  background-color: #e6fef4;
  margin: 0px 25px 20px 25px;
  border-radius: 10px;
`;

export const successfont = css`
  color: #1ecd83;
  font-size: 13px;
  margin-bottom: 4px;
`;
export const successLayoutBox = css`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const successTimefont = css`
  color: #1ecd83;
  font-size: 13px;
  margin-bottom: 15px;
`;
export const buttonReview = css`
  width: 82px;
  margin: 16px;
  height: 38px;
  background-color: #ff7038;
  color: white;
  border-radius: 20px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;
