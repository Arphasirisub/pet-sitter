/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Modal from "@mui/material/Modal";
import { buttonReview, line } from "../styleComponent/bookingHistoryTapStyle";
import { useEffect, useState } from "react";
import { closeButton } from "../styleComponent/PopupCardStyle";
import {
  popupReview,
  reviewContainer,
  titleContainer,
  titleFont,
  titleRatingFont,
  inputReviewBox,
  inputLayout,
  buttonLayout,
  cancelButton,
  reviewButton,
} from "../styleComponent/PopupReviewStyle";
import { useMyHistoryTools } from "../../../../contexts/myHistoryTools";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

//this function is button review on sucessStatus in statusBar folder
function ReviewPopup() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState("");
  const { postReview, selectedBooking, setSelectedBooking, getHistory } =
    useMyHistoryTools();

  const handleSubmit = async () => {
    try {
      await postReview(
        selectedBooking.sitter_id,
        content,
        rating,
        selectedBooking.id
      );
      setOpen(false);
      await getHistory();
    } catch (error) {
      alert("error");
    }
  };

  return (
    <>
      <button className="review-button" onClick={handleOpen} css={buttonReview}>
        Review
      </button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} css={popupReview}>
          <div className="review-rating-container" css={reviewContainer}>
            <div className="title-container" css={titleContainer}>
              <p className="title" css={titleFont}>
                Rating & Review
              </p>
              <button
                className="close-button"
                css={closeButton}
                onClick={handleClose}
              >
                x
              </button>
            </div>
            <hr className="line" css={line} />
            <p className="what-is-your-rate" css={titleRatingFont}>
              What is your rate?
            </p>
            <Box
              className="rating-star"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "4px",
                marginBottom: "60px",
                "& > legend": { mt: 2 },
                "& .MuiRating-iconFilled": {
                  color: "#1ecd83",
                  fontSize: "50px",
                },
                "& .MuiRating-iconEmpty": { fontSize: "50px" },
              }}
            >
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </Box>
            <p className="your-experience-title" css={titleRatingFont}>
              Share more about your experience
            </p>
            <div className="input-layout" css={inputLayout}>
              <textarea
                className="your-experience-input"
                css={inputReviewBox}
                placeholder="Your review..."
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                value={content}
              />
            </div>
            <div className="button-layout" css={buttonLayout}>
              <button
                className="cancel-button"
                onClick={handleClose}
                css={cancelButton}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="review-rating-button"
                css={reviewButton}
              >
                Sent Review&Rating
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default ReviewPopup;
