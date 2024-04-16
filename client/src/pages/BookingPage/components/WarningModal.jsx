/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useBookingTools } from "../../../contexts/BookingTools";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function WarningModal() {
  const {
    showWarningModal,
    setShowWarningModal,
    setSelectedPets,
    activeSteps,
    setCompleteStep,
    completeStep,
    setActiveSteps,
    setMessage,
  } = useBookingTools();
  const navigate = useNavigate();
  const params = useParams();

  const handleClose = () => {
    console.log(activeSteps);
    if (activeSteps === "yourPet") {
      setSelectedPets([]);
      navigate(`/detail/${params.id}`);
    }

    if (activeSteps === "information") {
      setActiveSteps("yourPet");
      setCompleteStep({
        ...completeStep,
        information: false,
      });
      setMessage("");
    }
    setShowWarningModal(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={showWarningModal}
      onClose={handleClose}
      closeAfterTransition
    >
      <Fade in={showWarningModal}>
        <Box
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            background-color: #ffffff;
            border: 2px solid #000000;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 15px;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              gap: 10px;
            `}
          >
            <img
              src="https://img.freepik.com/premium-vector/hazard-warning-attention-sign-with-exclamation-mark-symbol-white_231786-5218.jpg"
              alt="warning icon"
              css={css`
                width: 20px;
                height: 20px;
              `}
            />
            <Typography variant="h6" component="h2">
              Warning
            </Typography>
          </div>
          <Typography
            id="transition-modal-description"
            css={css`
              margin-top: 10px;
            `}
          >
            Are you sure you want to discard? This action cannot be undone.
          </Typography>
          <Divider
            css={css`
              margin-top: 10px;
              background-color: rgba(0, 0, 0, 0.1);
              width: 100%;
            `}
          />
          <Button
            onClick={() => {
              setShowWarningModal(false);
            }}
            css={css`
              margin-top: 10px;
            `}
          >
            Close
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}

export default WarningModal;
