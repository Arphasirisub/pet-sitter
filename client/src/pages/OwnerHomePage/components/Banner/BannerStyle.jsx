/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const modifyContainerBannerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const containerBannerStyle = css`
  width: 1440px;
  height: 608px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const bannerContentStyle = css`
  background-color: rgba(255, 245, 236, 1);
  margin: 0px;
  padding: 0px;
  width: 1280px;
  height: 448px;
  border-radius: 16px;
  position: relative;
`;

export const bannerfigmaStyle = css`
  display: flex;
  justify-content: space-between;
`;

export const figmaLeftStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 448px;
`;

export const figmaRightStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 327px;
`;

export const halfBlueDonutStyle = css`
  border-radius: 0px 16px;
`;

export const figmaDescriptionStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const bannerTopicTextStyle = css`
  font-weight: 700;
  font-size: 56px;
  text-align: center;
  width: 457px;
  padding: 0;
  margin: 0;
`;

export const figmaButtonStyle = css`
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
`;

export const yellowCircleStyle = css`
  width: 229px;
  height: 229px;
  border-radius: 16px;
`;

export const largeGreenStarStyle = css`
  width: 191px;
  height: 186px;
  position: absolute;
  top: 154.38px;
  right: 155.14px;
  rotate: 5deg;
`;
