/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const inputContainer = css`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: auto;
  background-color: white;
  border-radius: 10px;
  margin-top: 25px;
  margin-bottom: 40px;
  padding: 25px 30px 30px 60px;
`;

export const headingStyle = css`
  font-weight: 600;
  font-size: 18px;
  color: #aeb1c3;
`;

export const addressDetailInput = css`
  width: 988px;
  height: 45px;
  border: 1px solid #e4e5f1;
  border-radius: 7px;
  margin-top: 10px;
  padding-left: 10px;
  &:focus {
    border: 1px solid #ff7038;
    outline: none;
  }
`;

export const labelTitle = css`
  margin-top: 20px;
`;
export const inputLayout = css`
  display: flex;
  flex-direction: column;
`;
export const input = css`
  width: 450px;
  height: 45px;
  border: 1px solid #e4e5f1;
  border-radius: 7px;
  margin-top: 10px;
  padding-left: 10px;
  &:focus {
    border: 1px solid #ff7038;
    outline: none;
  }
`;
export const rowLayout = css`
  display: flex;
  flex-direction: row;
  margin-top: 35px;
  justify-content: space-between;
  width: 1000px;
`;
