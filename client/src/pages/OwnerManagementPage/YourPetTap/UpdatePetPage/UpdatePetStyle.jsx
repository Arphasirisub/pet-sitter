/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const containerUpdatePetStyle = css`
  display: flex;
  flex-direction: column;
  height: 1336px;
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
`;
export const sectionImportImgStyle = css`
  padding: 0px 36px;
  position: relative;
`;

export const pictureByIdStyle = css`
  width: 240px;
  height: 240px;
  border-radius: 999px;
  object-fit: cover;
`;

export const importButtonStyle = css`
  cursor: pointer;
  position: absolute;
  top: 185px;
  left: 217px;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  padding: 0px 36px;
  gap: 40px;
`;

export const labelStyle = css`
  font-weight: 500;
  font-size: 16px;
`;

export const inputButtonStyle = css`
  display: flex;
  flex-direction: column;
  padding: 52px 0px 0px 0px;
  border-top: 1px solid rgba(220, 223, 237, 1);
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
    border-color: rgba(255, 112, 55, 1);
  }
`;
export const deleteButtonStyle = css`
  color: rgba(255, 112, 55, 1);
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
`;
export const textDeleteButtonStyle = css`
  font-size: 16px;
  font-weight: 700;
  color: rgba(255, 112, 55, 1);
  cursor: pointer;
  padding: 0;
  margin: 0;
  margin-left: 5px;
`;

export const deleteConfirmStyle = css`
  padding: 0px 24px 16px 24px;
  border-bottom: 1px solid rgba(228, 230, 237, 1);
`;
export const deleteDetailStyle = css`
  color: rgba(123, 126, 143, 1);
  padding: 0 24px;
`;

export const buttonGroupStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  margin-top: 24px;
`;

export const cancleButtonStyle = css`
  background-color: rgba(255, 241, 236, 1);
  font-family: "Satoshi", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: rgba(255, 112, 55, 1);
  font-size: 15px;
  border-radius: 20px;
  text-transform: none;
  transition: background-color 0.3s ease;
  width: 127px;
  height: 48px;

  &:hover {
    color: #ffc9c9;
  }
  padding: 12px 24px 12px 24px;
  border-radius: 99px;
  border: none;
  cursor: pointer;
  gap: 8px;
`;

export const deleteButtonPopupStyle = css`
  background-color: #ff7037;
  font-family: "Satoshi", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: white;
  font-size: 15px;
  border-radius: 20px;
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
  gap: 8px;
`;

export const buttonGroupUpdateStyle = css`
  display: flex;
  justify-content: space-between;
`;

export const cancleUpdeteButtonStyle = css`
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

export const updateButtonStyle = css`
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
  width: 131px;
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

export const inputCenterStyle = css`
  display: flex;
  justify-content: space-between;
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

export const sectionDeleteButton = css`
  display: flex;
  align-items: center;
`;

export const centerInRightStyle = css`
  display: flex;
  flex-direction: column;
`;

export const centerInLeftStyle = css`
  display: flex;
  flex-direction: column;
`;

export const optionInputDataNone = css`
  display: none;
`;
