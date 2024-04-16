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
  margin-bottom: 37px;
`;

export const inputTradeName = css`
  width: 600px;
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
export const petTypeInput = css`
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

export const textAraeStyle = css`
  width: 1000px;
  height: 180px;
  border: 1px solid #e4e5f1;
  border-radius: 7px;
  margin-top: 10px;
  padding: 10px 0px 0px 10px;
  margin-top: 0px;
  &:focus {
    border: 1px solid #ff7038;
    outline: none;
  }
`;
export const titleStyle = css`
  margin-top: 25px;
`;

export const addImage = css`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  cursor: pointer;
`;

export const selectionStyle = css`
  height: 45px;
  &:focus {
    border: 1px solid #ff7038;
    outline: none;
  }
`;
export const imgGalleryContainer = css`
  display: flex;
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;
`;
export const position = css`
  position: relative;
`;
export const imgStyle = css`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  /* background-color: #dcdfed; */
`;

export const deleteButton = css`
  display: flex;
  width: 25px;
  height: 25px;
  position: absolute;
  margin-top: -226px;
  margin-left: 170px;
  cursor: pointer;
`;
