/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const containerCreatePetStyle = css`
  display: flex;
  flex-direction: column;
  height: 1244px;
  gap: 40px;
`;

export const sectionTopicStyle = css`
  display: flex;
  align-items: center;
  padding: 0px 41px;
`;
export const topicButtonStyle = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0;
  padding: 0;
`;

export const topicTextStyle = css`
  font-weight: 700;
  font-size: 24px;
  margin-left: 5px;
`;

export const sectionImportIngStyle = css`
  padding: 0px 36px;
  position: relative;
`;

export const importButtonImgStyle = css`
  position: absolute;
  top: 184px;
  left: 212px;
  cursor: pointer;
`;

export const fromStyle = css`
  display: flex;
  flex-direction: column;
  padding: 0px 36px;
  gap: 40px;
`;

export const labelStyle = css`
  font-weight: 500;
  font-size: 16px;
`;

export const inputTopStyle = css`
  width: 870px;
  font-weight: 400;
  font-size: 16px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(220, 223, 237, 1);
  font-family: "Satoshi", sans-serif;
  margin: 8px 0;
  padding: 12px 0px 12px 12px;
  &:focus {
    border-color: rgba(255, 112, 55, 1);
  }
`;

export const inputCenterStyle = css`
  display: flex;
  justify-content: space-between;
`;

export const centerLeftStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 16px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  font-family: "Satoshi", sans-serif;
  margin: 0;
  padding: 0;
  &:focus {
    border-color: rgba(255, 112, 55, 1) !important;
  }
`;

export const centerRightStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 16px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  font-family: "Satoshi", sans-serif;
  margin: 0;
  padding: 0;

  &:focus {
    border-color: rgba(255, 112, 55, 1) !important;
  }
`;

export const inputButtomStyle = css`
  display: flex;
  flex-direction: column;
  padding: 32px 0px 0px 0px;
  border-top: 1px solid rgba(220, 223, 237, 1);
`;

export const textAreaStyle = css`
  width: 870px;
  height: 140px;
  font-weight: 400;
  font-size: 16px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(220, 223, 237, 1);
  font-family: "Satoshi", sans-serif;
  margin: 8px 0 0 0;
  padding: 12px 0px 12px 12px;
  text-indent: 5px;

  &:focus {
    border-color: rgba(255, 112, 55, 1) !important;
  }
`;

export const buttonInputStyle = css`
  display: flex;
  justify-content: space-between;
`;

export const cancleButtonStyle = css`
  background-color: rgba(255, 241, 236, 1);
  width: 120px;
  font-family: "Satoshi", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: rgba(255, 112, 55, 1);
  &:hover {
    color: #ffc9c9;
  }
  padding: 12px 24px 12px 24px;
  border-radius: 99px;
  border: none;
  cursor: pointer;
`;

export const createPetInputButtonStyle = css`
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

export const selectCenterStyle = css`
  width: 430px;
  font-weight: 400;
  font-size: 16px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(220, 223, 237, 1);
  font-family: "Satoshi", sans-serif;
  margin: 8px 0 40px 0;
  padding: 12px 16px 12px 12px;
  color: rgba(123, 126, 143, 1);
  &:focus {
    border-color: rgba(255, 112, 55, 1) !important;
  }
`;

export const inputStyle = css`
  width: 400px;
  font-weight: 400;
  font-size: 16px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(220, 223, 237, 1);
  font-family: "Satoshi", sans-serif;
  margin: 8px 0 40px 0;
  padding: 12px 16px 12px 12px;
  &:focus {
    border-color: rgba(255, 112, 55, 1) !important;
  }
`;

export const inputNoButtomStyle = css`
  ${inputStyle};
  margin-bottom: 0;
`;

export const imgImportStyle = css`
  width: 240px;
  height: 240px;
  border-radius: 999px;
  object-fit: cover;
`;

export const popUpWarningTopStyle = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(123, 126, 143, 1);
`;

export const createPetFailedStyle = css`
  font-weight: 700;
  font-size: 30px;
  margin: 0;
`;

export const closeButtomStyle = css`
  width: 30px;
  height: 30px;
  color: rgba(123, 126, 143, 1);
  margin-top: 5px;
`;

export const popUpWarningButtomStyle = css`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const warningIconStyle = css`
  width: 50px;
  height: 50px;
  color: rgba(234, 16, 16, 1);
  margin-bottom: 5px;
`;

export const textWarningStyle = css`
  color: rgba(123, 126, 143, 1);
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const inputErrorStyle = css`
  border: 1px solid red;
`;

export const warningIconPetNameStyle = css`
  position: absolute;
  top: 63%;
  right: 15px;
  transform: translateY(-50%);
`;

export const warningIconInputStyle = css`
  width: 20px;
  height: 20px;
  color: rgba(234, 16, 16, 1);
  margin-bottom: 5px;
`;

export const containerInputTopStyle = css`
  position: relative;
`;

export const warningIconInputPetTypeStyle = css`
  position: absolute;
  top: 17.5%;
  right: 23px;
  transform: translateY(-50%);
`;

export const warningIconInputSexStyle = css`
  position: absolute;
  top: 55%;
  right: 23px;
  transform: translateY(-50%);
`;

export const warningIconInputColorStyle = css`
  position: absolute;
  top: 92.5%;
  right: 15px;
  transform: translateY(-50%);
`;

export const warningIconInputBreedStyle = css`
  position: absolute;
  top: 17.5%;
  right: 15px;
  transform: translateY(-50%);
`;

export const warningIconInputAgeStyle = css`
  position: absolute;
  top: 55%;
  right: 15px;
  transform: translateY(-50%);
`;

export const warningIconInputWeightStyle = css`
  position: absolute;
  top: 92.5%;
  right: 15px;
  transform: translateY(-50%);
`;

export const optionSelectInput = css`
  color: rgba(123, 126, 143, 1);
`;
