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
import { useNavigate } from "react-router-dom";

function SuccessModal({ formData }) {
  const navigate = useNavigate();
  const { state, setState, login } = useAuth();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={!state.signUp.isSignUpError && state.signUp.isSignUpError !== null} // Ensure it's open when signUpError is false
      onClose={() => {
        setState((prevState) => ({
          ...prevState,
          signUp: {
            ...prevState.signUp,
            isSignUpError: null,
            isLoading: false,
          },
        }));
        navigate("/login"); // Navigate to login page on close
      }}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade
        in={!state.signUp.isSignUpError && state.signUp.isSignUpError !== null}
      >
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
          sx={{ minHeight: 200 }}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              padding-bottom: 30px;
            `}
          >
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              css={css`
                display: flex;
                gap: 10px;
              `}
            >
              <img
                css={css`
                  width: 30px;
                `}
                src="https://img.freepik.com/premium-vector/green-check-mark-icon-symbol-logo-circle-tick-symbol-green-color-vector-illustration_685751-503.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706486400&semt=ais"
              />
              Sign Up Successful
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Your account has been created successfully.
            </Typography>
          </div>
          <Divider
            css={css`
              background-color: rgba(255, 255, 255, 0.85);
              height: 3px;
            `}
          />
          <div
            css={css`
              display: flex;
              justify-content: space-around;
              width: 100%;
              padding-top: 20px;
            `}
          >
            <Button
              onClick={async () => {
                await login({
                  email: formData.email,
                  password: formData.password,
                });
                setState((prevState) => ({
                  ...prevState,
                  signUp: {
                    ...prevState.signUp,
                    isSignUpError: null,
                    isLoading: false,
                  },
                }));
              }}
            >
              Go to Website
            </Button>
            <Button
              onClick={() => {
                setState((prevState) => ({
                  ...prevState,
                  signUp: {
                    ...prevState.signUp,
                    isSignUpError: null,
                    isLoading: false,
                  },
                }));
                navigate("/login");
              }}
            >
              Close
            </Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}

export default SuccessModal;
