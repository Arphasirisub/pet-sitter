/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useAuth } from "../../../contexts/authentication";

export function InputBox({ handleInputChange, formData }) {
  const { setState, state } = useAuth();
  return (
    <>
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        autoComplete="username"
        required
        css={css`
          width: 100%;
        `}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        autoComplete="current-password"
        required
        css={css`
          width: 100%;
        `}
      />

      <div
        css={css`
          display: flex;
          justify-content: space-between;
          text-align: center;
          width: 100%;
        `}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.isRemember}
              onChange={handleInputChange}
              name="isRemember"
              type="checkbox"
            />
          }
          label="Remember Me"
        />
        <p
          css={css`
            color: rgb(255, 112, 55);
            &:hover {
              cursor: pointer;
            }
          `}
          onClick={() => {
            setState({
              ...state,
              forgetPassword: {
                ...state.forgetPassword,
                isForgetPassword: true,
              },
            });
            console.log(state);
          }}
        >
          Forget Password?
        </p>
      </div>
      <button
        type="submit"
        variant="contained"
        color="primary"
        css={css`
          background-color: rgb(255, 112, 55);
          border-radius: 20px;
          padding: 12px;
          border: none;
          color: white;
          font-size: 16px;
          &:hover {
            cursor: pointer;
          }
          width: 100%;
        `}
      >
        Login
      </button>
    </>
  );
}
