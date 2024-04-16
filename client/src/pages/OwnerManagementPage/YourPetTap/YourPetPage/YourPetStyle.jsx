/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const containerYourPetStyle = css`
  height: 824px;
`;

export const sectionTopicStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 41px;
`;

export const topicTextStyle = css`
  font-weight: 700;
  font-size: 24px;
`;

export const createPetButtonTopicStyle = css`
  background-color: #ff7037;
  font-family: "Satoshi", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: white;
  font-size: 15px;
  padding: 10px; /* Adjust padding for responsiveness */
  border-radius: 20px; /* Adjust border-radius for responsiveness */
  text-transform: none;
  transition: background-color 0.3s ease;
  width: 127px;
  height: 48px;

  &:hover {
    color: black;
  }
  padding: 12px 24px 12px 24px;
  border-radius: 99px;
  border: none;
  cursor: pointer;
  margin-left: 20px;
  gap: 8px;
`;

export const sectionContentStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding-left: 40px;
  gap: 16px;
`;

export const buttonCardStyle = css`
  width: 207px;
  height: 240px;
  border: 1px solid rgba(220, 223, 237, 1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  gap: 16px;

  &:hover {
    background-color: rgba(255, 241, 236, 1);
    border-color: rgba(255, 112, 55, 1);
  }
`;

export const cardImgStyle = css`
  width: 104px;
  height: 104px;
  object-fit: cover;
  border-radius: 100%;
`;

export const cardDetailStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  gap: 8px;
`;

export const petNameStyle = css`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  width: 159px;
  height: 28px;
  margin: 0;
`;
