/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const inputCenterStyle = css`
  width: 418px;
  font-weight: 400;
  font-size: 16px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(220, 223, 237, 1);
  font-family: "Satoshi", sans-serif;
  margin: 8px 0 40px 0;
  padding: 12px 0px 12px 12px;

  &:focus {
    border-color: rgba(255, 112, 55, 1) !important;
  }
`;

export const selectCenterStyle = css`
  width: 430px;
  font-weight: 400;
  font-size: 16px;
  border-radius: 8px;
  color: rgba(123, 126, 143, 1);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(220, 223, 237, 1);
  font-family: "Satoshi", sans-serif;
  margin: 8px 0 40px 0;
  padding: 12px 16px 12px 12px;
  &:focus {
    border-color: rgba(255, 112, 55, 1) !important;
  }
`;

export const inputNoButtomMargin = css`
  ${inputCenterStyle};
  margin-bottom: 0;
`;
