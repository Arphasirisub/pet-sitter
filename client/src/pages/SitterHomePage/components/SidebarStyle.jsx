/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const containerSidebarStyle = css`
  background-color: #fafafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: 100vh;
  border-right: 1px solid rgba(220, 223, 237, 1);
  padding: 16px 0px 16px 0px;
  position: fixed;
`;

export const sectionLogoStyle = css`
  padding: 24px 40px 40px 0px;
  background-color: #fafafb;
`;

export const fontSidebarStyle = css`
  margin-left: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* Set a fixed line height */
  letter-spacing: -0.32px;
  width: 152px;
`;

export const sidebarStyle = css`
  background-color: #fafafb;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 56px;
  transition: background-color 0.3s;
  &:hover {
    color: rgba(255, 112, 55, 1);
  }
`;

export const logoutStyle = css`
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;

  justify-content: flex-start;
  padding-bottom: 30px;
  padding-top: 20px;
  padding-left: 30px;
  &:hover {
    color: rgba(255, 112, 55, 1);
    background-color: rgb(255, 241, 236);
  }
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: rgba(91, 93, 111, 1);
`;

export const fontLogoutStyle = css`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: rgba(91, 93, 111, 1);
`;
export const sectionLogoutStyle = css`
  width: 240px;
  margin-top: auto;
  border-top: 1px solid rgba(220, 223, 237, 1);
`;

export const iconPaymentStyle = css`
  margin-left: 1px;
`;
