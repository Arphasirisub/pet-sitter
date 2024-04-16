/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useBookingTools } from "../../../contexts/BookingTools";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";

function VerifyModal() {
  const { showVerifyModal, setShowVerifyModal } = useBookingTools();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={showVerifyModal}
      onClose={() => {
        setShowVerifyModal(false);
      }}
      closeAfterTransition
    >
      <Fade in={showVerifyModal}>
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
              src="https://i.pinimg.com/736x/d0/17/47/d01747c4285afa4e7a6e8656c9cd60cb.jpg"
              alt="warning icon"
              css={css`
                width: 20px;
                height: 20px;
              `}
            />
            <Typography variant="h6" component="h2">
              Action Required
            </Typography>
          </div>
          <Typography
            id="transition-modal-description"
            css={css`
              margin-top: 10px;
            `}
          >
            Please select your pet before proceeding. This action cannot be
            undone.
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
              setShowVerifyModal(false);
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

export default VerifyModal;
