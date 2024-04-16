/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import sitterlogowhite from "../PublicPicture/sitter-logo-white.svg";

function Footer() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <div
        className="footer"
        css={css`
          background: #000000;
          width: 100%;
          max-width: 1600px;
          height: 280px;
          text-align: center;
        `}
      >
        <div className="footer__logo">
          <img
            src={sitterlogowhite}
            alt="sitterlogo"
            css={css`
              padding: 100px 0px 14px 0px;
              width: 169px;
              height: 50px;
            `}
          />
        </div>
        <div className="footer__text">
          <h3
            css={css`
              color: white;
              font-size: 24px;
              text-align: center;
              font-weight: 700;
              margin: 0;
            `}
          >
            Find your perfect pet sitter with us.
          </h3>
        </div>
      </div>
    </div>
  );
}
export default Footer;
