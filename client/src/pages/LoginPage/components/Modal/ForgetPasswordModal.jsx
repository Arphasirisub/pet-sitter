/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useAuth } from "../../../../contexts/authentication";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import axios from "axios";

function ForgetPasswordModal() {
  const [forgetEmail, setForgetEmail] = useState("");
  const { state, setState, forgetPassword } = useAuth();

  const handleSubmitEmail = async (event) => {
    event.preventDefault();
    await forgetPassword(forgetEmail);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={state.forgetPassword.isForgetPassword}
      onClose={() => {
        setState({
          ...state,
          forgetPassword: {
            ...state.forgetPassword,
            isForgetPassword: false,
            isError: false,
            isComplete: false,
          },
        });
        setForgetEmail("");
      }}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={state.forgetPassword.isForgetPassword}>
        <Box
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 500px;
            background-color: white;
            box-shadow: 24px;
            padding: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-radius: 20px;
            padding-top: 35px;
          `}
          sx={{ minHeight: 150 }}
        >
          <div
            css={css`
              font-size: 24px;
              font-weight: bold;
            `}
          >
            Forgot password?
          </div>
          {/* email form */}
          <form
            css={css`
              display: flex;
              flex-direction: column;
              gap: 10px;
              width: 100%;
              align-items: center;
            `}
            onSubmit={handleSubmitEmail}
          >
            <p>Input your email for reset your password</p>
            <div
              css={css`
                display: flex;
                justify-content: space-evenly;
                width: 100%;
                align-items: center;
              `}
            >
              <TextField
                required
                id="outlined-required"
                label="Your email"
                placeholder="example@email.com"
                type="text"
                sx={{ width: "65%" }}
                value={forgetEmail}
                onChange={(e) => {
                  setForgetEmail(e.target.value);
                }}
              />

              <Button type="submit">Confirm</Button>
            </div>
          </form>
          {/* result submit */}
          {state.forgetPassword.isError && (
            <div
              css={css`
                color: red;
              `}
            >
              Invalid email address
            </div>
          )}
          {state.forgetPassword.isComplete && (
            <div
              css={css`
                color: green;
              `}
            >
              Please check your email for OTP number
            </div>
          )}
          {state.forgetPassword.isLoading && (
            <CircularProgress
              css={css`
                margin-top: 20px;
              `}
            />
          )}

          <Divider sx={{ my: 2, height: 3 }} />
          <Button
            onClick={() => {
              setState({
                ...state,
                forgetPassword: {
                  ...state.forgetPassword,
                  isForgetPassword: false,
                  isError: false,
                  isComplete: false,
                },
              });
              setForgetEmail("");
            }}
          >
            Close
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ForgetPasswordModal;
