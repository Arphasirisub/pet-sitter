/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  text,
  flexRowRating,
  inputStyles,
  ratingStyle,
  // fiveRatingFocusbox,
  serchButtonStyle,
} from "./HeaderStyle.jsx";
import { useSitter } from "../../../../contexts/getSitters";
import {
  FiveStar,
  FourStar,
  ThreeStar,
  TwoStar,
  OneStar,
} from "./StarIcon.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";

function RatingDropdown() {
  const { searchInput, handleStateChange, getSitters } = useSitter();
  const [changeColor, setChangeColor] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    getSitters();
  };
  return (
    <div className="bargroup_rating" css={ratingStyle}>
      <span css={text}>Rating:</span>
      <div css={flexRowRating}>
        <div
          onClick={() => {
            handleStateChange("rating", 5);
            setChangeColor(true);
          }}
        >
          <FiveStar css={[changeColor]} />
        </div>
        <div
          onClick={() => {
            handleStateChange("rating", 4);
          }}
        >
          <FourStar />
        </div>
        <div
          onClick={() => {
            handleStateChange("rating", 3);
          }}
        >
          <ThreeStar />
        </div>
        <div
          onClick={() => {
            handleStateChange("rating", 2);
          }}
        >
          <TwoStar />
        </div>
        <div
          onClick={() => {
            handleStateChange("rating", 1);
          }}
        >
          <OneStar />
        </div>
      </div>
      <span css={text}>Experience:</span>
      <select
        css={inputStyles}
        id="experience"
        name="experience"
        value={searchInput.experience}
        onChange={(e) => {
          handleStateChange("experience", e.target.value);
        }}
      >
        <option
          value=""
          disabled
          css={css`
            color: rgba(123, 126, 143, 1);
          `}
        >
          see all
        </option>
        <option value="0-2">0-2 Years</option>
        <option value="3-5">3-5 Years</option>
        <option value="5-9">5+ Years</option>
      </select>

      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={() => {
          handleSubmit();
          navigate("/list");
        }}
        css={serchButtonStyle}
      >
        Search
      </Button>
    </div>
  );
}
export default RatingDropdown;
