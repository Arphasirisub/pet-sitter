/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  detailScale,
  detailHeaderText,
  detailDescriptionText,
} from "./HeaderStyle.jsx";

function LogoGruopDetail() {
  return (
    <div className="logogroup_detail" css={detailScale}>
      <p css={detailHeaderText}>
        Pet Sitter
        <span
          css={css`
            color: rgba(255, 112, 55, 1);
          `}
        >
          ,
        </span>
        <br />
        Perfect
        <span
          css={css`
            color: rgba(118, 208, 252, 1);
          `}
        >
          ,
        </span>
        <br />
        For Your Pet
        <span
          css={css`
            color: rgba(255, 202, 98, 1);
          `}
        >
          .
        </span>
      </p>
      <h3 css={detailDescriptionText}>Find your perfect pet sitter with us.</h3>
    </div>
  );
}
export default LogoGruopDetail;
