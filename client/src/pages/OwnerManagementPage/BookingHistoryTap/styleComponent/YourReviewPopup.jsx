/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const popupContainer = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background-color: white;
  box-shadow: 24px;
  padding: 16px;
  border-radius: 20px;
  border: none;
  display: flex;
  flex-direction: column;
`;

export const line = css`
  border: solid 0.5px #e8e9f3;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 50px;
`;

export const titleLayout = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 15px;
  font-weight: 700;
  font-size: 18px;
`;
export const yourReviewContainer = css`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const fullNameStyle = css`
  font-weight: 600;
`;

export const nameDateContainer = css`
  margin-top: 20px;
  margin-right: 60px;
`;

export const ratingContainer = css`
  margin-top: 20px;
`;
export const greenStartStyle = css`
  margin-bottom: 20px;
`;
export const buttoncontainer = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const viewPetsitterButton = css`
  background-color: #fff1ec;
  width: 150px;
  text-align: center;
  padding: 10px;
  border-radius: 25px;
  color: #ff7038;
  font-weight: 500;
  cursor: pointer;
`;

export const dateStyle = css`
  margin-top: 6px;
  color: #9d9eab;
  font-size: 13px;
`;

