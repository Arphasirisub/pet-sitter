/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { greenStar, numberRating, starLayout } from "./HeaderStyle.jsx";
import { useSitter } from "../../../../contexts/getSitters";

export function FiveStar() {
  const { searchInput } = useSitter();
  return (
    <button
      css={css`
        display: flex;
        flex-direction: row;
        border: solid 1px
          ${searchInput.rating === 5
            ? "rgba(255, 112, 55, 1)"
            : "rgba(226, 226, 226, 0.5)"};
        background-color: white;
        width: 140px;
        height: 30px;
        border-radius: 8px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        p {
          color: ${searchInput.rating === 5
            ? "rgba(255, 112, 55, 1)"
            : "black)"};
        }
      `}
    >
      <p css={numberRating}>5</p>
      <div css={starLayout}>
        {greenStar}
        {greenStar}
        {greenStar}
        {greenStar}
        {greenStar}
      </div>
    </button>
  );
}

export function FourStar() {
  const { searchInput } = useSitter();
  return (
    <button
      css={css`
        display: flex;
        flex-direction: row;
        border: solid 1px
          ${searchInput.rating === 4
            ? "rgba(255, 112, 55, 1)"
            : "rgba(226, 226, 226, 0.5)"};
        background-color: white;
        border-radius: 8px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 120px;
        height: 30px;
        p {
          color: ${searchInput.rating === 4
            ? "rgba(255, 112, 55, 1)"
            : "black)"};
        }
      `}
    >
      <p css={numberRating}>4</p>
      <div css={starLayout}>
        {greenStar}
        {greenStar}
        {greenStar}
        {greenStar}
      </div>
    </button>
  );
}

export function ThreeStar() {
  const { searchInput } = useSitter();
  return (
    <button
      css={css`
        display: flex;
        flex-direction: row;
        border: solid 1px
          ${searchInput.rating === 3
            ? "rgba(255, 112, 55, 1)"
            : "rgba(226, 226, 226, 0.5)"};
        background-color: white;
        border-radius: 8px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 95px;
        height: 30px;
        p {
          color: ${searchInput.rating === 3
            ? "rgba(255, 112, 55, 1)"
            : "black)"};
        }
      `}
    >
      <p css={numberRating}>3</p>
      <div css={starLayout}>
        {greenStar}
        {greenStar}
        {greenStar}
      </div>
    </button>
  );
}

export function TwoStar() {
  const { searchInput } = useSitter();
  return (
    <button
      css={css`
        display: flex;
        flex-direction: row;
        border: solid 1px
          ${searchInput.rating === 2
            ? "rgba(255, 112, 55, 1)"
            : "rgba(226, 226, 226, 0.5)"};
        background-color: white;
        border-radius: 8px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 70px;
        height: 30px;
        p {
          color: ${searchInput.rating === 2
            ? "rgba(255, 112, 55, 1)"
            : "black)"};
        }
      `}
    >
      <p css={numberRating}>2</p>
      <div css={starLayout}>
        {greenStar}
        {greenStar}
      </div>
    </button>
  );
}

export function OneStar() {
  const { searchInput } = useSitter();
  return (
    <button
      css={css`
        display: flex;
        flex-direction: row;
        border: solid 1px
          ${searchInput.rating === 1
            ? "rgba(255, 112, 55, 1)"
            : "rgba(226, 226, 226, 0.5)"};
        background-color: white;
        border-radius: 8px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 50px;
        height: 30px;
        p {
          color: ${searchInput.rating === 1
            ? "rgba(255, 112, 55, 1)"
            : "black)"};
        }
      `}
    >
      <p css={numberRating}>1</p>
      <div css={starLayout}>{greenStar}</div>
    </button>
  );
}
