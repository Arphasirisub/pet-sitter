/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import React from "react";
import { yourReviewButton } from "../styleComponent/PopupReviewStyle";
import {
  popupContainer,
  line,
  titleLayout,
  yourReviewContainer,
  fullNameStyle,
  nameDateContainer,
  ratingContainer,
  greenStartStyle,
  viewPetsitterButton,
  buttoncontainer,
  dateStyle,
} from "../styleComponent/YourReviewPopup";
import { useNavigate } from "react-router-dom";
import { greenStar } from "../../../SearchListPage/components/Style";
import axios from "axios";

function ReadYourReview({ booking }) {
  const [open, setOpen] = useState(false);
  const [myReview, setMyReview] = useState([]);
  const handleOpen = () => {
    setOpen(true);
    myReviewAndRating(booking.sitter_id, booking.id);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();

  const myReviewAndRating = async (sitter_id, booking_id) => {
    const result = await axios.get(
      `http://localhost:4000/comments/myPost?sitter_id=${sitter_id}&booking_id=${booking_id}`
    );
    console.log(result);
    setMyReview(result.data.data);
  };

  return (
    <div>
      <Button onClick={handleOpen} css={yourReviewButton}>
        Your Review
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box css={popupContainer}>
          <div>
            <div css={titleLayout}>
              <div>Your Rating and Review</div>
              <div onClick={handleClose} css={css`
                cursor: pointer;
              `}>X</div>
            </div>
            <hr css={line} />
            {myReview &&
              myReview.length > 0 &&
              myReview.map((review, index) => {
                return (
                  <>
                    <div key={index} css={yourReviewContainer}>
                      <img
                        src={review.owners.profile_img}
                        css={css`
                          width: 50px;
                          height: 50px;
                          margin: 20px;
                          border-radius: 100%;
                        `}
                      />
                      <div css={nameDateContainer}>
                        <div css={fullNameStyle}>{review.owners.full_name}</div>
                        <p css={dateStyle}>{review.created_at}</p>
                      </div>
                      <div css={ratingContainer}>
                        <div css={greenStartStyle}>
                          {Array.from({ length: review.rating }, (_, index) => (
                            <React.Fragment key={index}>
                              {greenStar || 0}
                            </React.Fragment>
                          ))}
                        </div>
                        <div>{review.content}</div>
                      </div>
                    </div>
                    <hr css={line} />
                  </>
                );
              })}
          </div>
          <div css={buttoncontainer}>
            <Button
              css={viewPetsitterButton}
              onClick={() => navigate(`/detail/${booking.sitter_id}`)}
            >
              View Pet Sitter
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default ReadYourReview;
