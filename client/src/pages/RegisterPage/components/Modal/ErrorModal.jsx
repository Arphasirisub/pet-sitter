/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useAuth } from "../../../../contexts/authentication";

function ErrorModal() {
  const { state, setState } = useAuth();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={!!state.signUp.isSignUpError} // Ensure it's always a boolean
      onClose={() => {
        setState((prevState) => ({
          ...prevState,
          signUp: {
            ...prevState.signUp,
            isSignUpError: null,
            isLoading: false,
          }, // Reset signUp error and loading state
        }));
      }}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={!!state.signUp.isSignUpError}>
        <Box
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            background-color: white;
            padding-top: 10px;

            box-shadow: 24px;

            display: flex;
            justify-content: center;

            flex-direction: column;
            background-color: white;
            border-radius: 20px;
          `}
          sx={{ minHeight: 150 }}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 15px;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 10px;
              `}
            >
              <img
                src="https://i.pinimg.com/736x/d0/17/47/d01747c4285afa4e7a6e8656c9cd60cb.jpg"
                css={css`
                  width: 20px;
                  height: 20px;
                `}
              ></img>

              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Signup Failed
              </Typography>
            </div>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              It seems that your email is already in use. Please try signing up
              with a different email.
            </Typography>
          </div>
          <Divider
            css={css`
              background-color: rgba(255, 255, 255, 0.85);
            `}
          />
          <Button
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                signUp: {
                  ...prevState.signUp,
                  isSignUpError: null,
                  isLoading: false,
                }, // Reset signUp error and loading state
              }));
            }}
            css={css`
              padding-bottom: 10px;
            `}
          >
            Close
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ErrorModal;
