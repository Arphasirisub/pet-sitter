/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Header() {
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px;
          margin-bottom: 56px;
        `}
      >
        <div
          css={css`
            font-family: Satoshi;
            font-size: 56px;
            font-style: normal;
            font-weight: 700;
            line-height: 64px;
          `}
        >
          Join Us!
        </div>
        <div
          css={css`
            font-family: Satoshi;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 32px;
            color: rgb(123, 126, 143);
          `}
        >
          Find your perfect pet sitter with us
        </div>
      </div>
    </>
  );
}

export default Header;
