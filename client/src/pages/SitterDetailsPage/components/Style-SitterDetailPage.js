/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const averageRatingBox = css`
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 0;
  border: 1px solid black;
  background-color: black;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: white;
  text-align: center;
  padding: 40px;
`;
export const boxModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const buttonOrange = {
  width: "100%",
  backgroundColor: "#ff7037",
  color: "white",
  borderRadius: 20,
  mt: 2,
  "&:hover": {
    backgroundColor: "#fff1ec",
    color: "#ff7037",
  },
};
