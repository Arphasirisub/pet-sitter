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
import { Typography } from "@mui/material";

function InvalidUsernameModal() {
  const { state, setState } = useAuth();
  const modalStlye = css`
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
  `;
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={state.signIn.isSignInError}
      onClose={() => {
        setState((prevState) => ({
          ...prevState,
          signIn: { ...prevState.signIn, isSignInError: false },
        }));
        setFormData({ ...formData, password: "" });
      }}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={state.signIn.isSignInError}>
        <Box css={modalStlye} sx={{ minHeight: 150 }}>
          {/* Set a minimum height */}
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Login Failed
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Your email or password is incorrect. Please try again.
          </Typography>
          <Divider sx={{ my: 2, backgroundColor: "red", height: 3 }} />
          <Button
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                signIn: { ...prevState.signIn, isSignInError: false },
              }));
              setFormData({ ...formData, password: "" });
            }}
          >
            Close
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}

export default InvalidUsernameModal;
