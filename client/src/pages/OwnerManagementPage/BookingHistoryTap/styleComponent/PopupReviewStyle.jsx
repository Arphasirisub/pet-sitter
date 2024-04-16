/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const popupReview = css`
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

export const reviewContainer = css`
  display: flex;
  flex-direction: column;
`;
export const titleContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 20px 10px 20px;
`;
export const titleFont = css`
  font-weight: 600;
  font-size: 18px;
`;
export const titleRatingFont = css`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`;

export const inputReviewBox = css`
  width: 560px;
  height: 200px;
  border: solid 1px #e8e9f3;
  border-radius: 10px;
  margin-bottom: 50px;
  outline: none;
  padding: 10px 0px 0px 10px;

  &::placeholder {
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 13px;
    transform: translate(8px, 8px);
  }
`;

export const inputLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const buttonLayout = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 15px;
`;

export const cancelButton = css`
  background-color: #fff1ec;
  color: #ff7038;
  width: 100px;
  height: 40px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
`;

export const reviewButton = css`
  background-color: #ff7038;
  color: white;
  width: 180px;
  height: 40px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
`;

export const yourReviewButton = css`
  font-size: 11px;
  width: 110px;
  margin: 16px;
  height: 30px;
  background-color: #fff1ec;
  color: #ff7038;
  border-radius: 20px;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;