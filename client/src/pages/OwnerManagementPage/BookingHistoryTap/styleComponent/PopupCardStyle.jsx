/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const cardContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const popupStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  background-color: white;
  box-shadow: 24px;
  padding: 16px;
  border-radius: 20px;
  border: none;
  display: flex;
  flex-direction: column;
`;

export const titleStyle = css`
  font-weight: 500;
  font-size: 18px;
`;
export const headBar = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 10px;
`;
export const closeButton = css`
  background-color: white;
  border: none;
  font-size: 25px;
  font-weight: 500;
  cursor: pointer;
`;

export const statusStyle = css`
  font-size: 13px;
  margin-bottom: 30px;
`;

export const transactionFontStyle = css`
  font-size: 13px;
  color: #c2c5d2;
  margin: 4px 0px;
`;

export const transactionContainer = css`
  margin-bottom: 20px;
`;

export const columnLayout = css`
  display: flex;
  flex-direction: column;
`;
export const sitterNameTitle = css`
  font-size: 13px;
  color: #7b7e8f;
  margin-bottom: 0px;
`;

export const sitterNameData = css`
  font-size: 13px;
  margin-top: 4px;
`;

export const dateTimeContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const line = css`
  border: solid 0.5px #e8e9f3;
  width: 100%;
  margin-top: 10px;
`;
export const totalContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


