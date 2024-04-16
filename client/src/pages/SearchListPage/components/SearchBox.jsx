/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Checkbox from "@mui/material/Checkbox";
import searchIcon from "../../../PublicPicture/searchIcon.png";
import { useEffect, useState } from "react";
import { useSitter } from "../../../contexts/getSitters.jsx";
import {
  FiveStar,
  FourStar,
  ThreeStar,
  TwoStar,
  OneStar,
} from "./StarIcon.jsx";
import {
  searchBox,
  searchInputStyle,
  searchIconStyle,
  text,
  checkBoxLaout,
  checkBoxText,
  flexRowRating,
  inputStyles,
  buttonContainer,
  clearButton,
  searchButton,
  sticky,
  checkboxStyles,
  optionDisable,
} from "./Style.jsx";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function SearchBox() {
  const {
    getSitters,
    searchInput,
    setSearchInput,
    handleStateChange,
  } = useSitter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    getSitters();
  };

  const handleClearButtonClick = () => {
    setSearchInput({
      experience: "",
      searchInput: "",
      dog: false,
      cat: false,
      bird: false,
      rabbit: false,
      rating: 0,
    });
    getSitters();
  };

  useEffect(() => {
    getSitters();
  }, [searchInput]);

  return (
    <form css={sticky} onSubmit={handleSubmit}>
      <div>
        <div css={searchBox}>
          <label css={text} htmlFor="searchInput">
            Search
          </label>
          <div>
            <input
              type="text"
              id="searchInput"
              name="searchInput"
              css={searchInputStyle}
              value={searchInput.searchInput}
              onChange={(e) => {
                handleStateChange("searchInput", e.target.value);
              }}
            />

            <img css={searchIconStyle} src={searchIcon} alt="Search Icon" />
          </div>

          <p css={text}>Pet Type:</p>
          <div css={checkBoxLaout}>
            <label htmlFor="dog" css={checkBoxText}>
              <Checkbox
                id="dog"
                name="petType"
                {...label}
                color="default"
                checked={searchInput.dog}
                onChange={(e) => {
                  handleStateChange("dog", e.target.checked);
                }}
                sx={checkboxStyles}
              />
              Dog
            </label>
            <label htmlFor="cat" css={checkBoxText}>
              <Checkbox
                id="cat"
                name="petType"
                {...label}
                color="default"
                checked={searchInput.cat}
                onChange={(e) => {
                  handleStateChange("cat", e.target.checked);
                }}
                sx={checkboxStyles}
              />
              Cat
            </label>
            <label htmlFor="bird" css={checkBoxText}>
              <Checkbox
                id="bird"
                name="petType"
                {...label}
                color="default"
                checked={searchInput.bird}
                onChange={(e) => {
                  handleStateChange("bird", e.target.checked);
                }}
                sx={checkboxStyles}
              />
              Bird
            </label>
            <label htmlFor="rabbit" css={checkBoxText}>
              <Checkbox
                id="rabbit"
                name="petType"
                {...label}
                color="default"
                checked={searchInput.rabbit}
                onChange={(e) => {
                  handleStateChange("rabbit", e.target.checked);
                }}
                sx={checkboxStyles}
              />
              Rabbit
            </label>
          </div>
          <div css={text}>Rating:</div>
          <div css={flexRowRating}>
            <div
              onClick={() => {
                handleStateChange("rating", 5);
              }}
            >
              <FiveStar />
            </div>
            <div
              onClick={() => {
                handleStateChange("rating", 4);
              }}
            >
              <FourStar />
            </div>
          </div>
          <div css={flexRowRating}>
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

          <p css={text}>Experience:</p>

          <select
            css={inputStyles}
            id="experience"
            name="experience"
            value={searchInput.experience}
            onChange={(e) => {
              handleStateChange("experience", e.target.value);
            }}
          >
            <option value="" disabled css={optionDisable}>
              see all
            </option>
            <option value="0-2">0-2 Years</option>
            <option value="3-5">3-5 Years</option>
            <option value="5-9">5+ Years</option>
          </select>

          <div css={buttonContainer}>
            <button
              css={clearButton}
              type="button"
              onClick={handleClearButtonClick}
            >
              Clear
            </button>
            <button type="submit" css={searchButton}>
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default SearchBox;
