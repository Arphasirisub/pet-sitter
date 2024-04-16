/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import loginBackground1 from "../PublicPicture/loginBackground1.png";
import loginBackground2 from "../PublicPicture/loginBackground2.png";
function AuthBackground() {
  const secondBackground = css`
    position: absolute;
    right: 0;
    top: 40px;
  `;
  const firstBackground = css`
    position: absolute;
    left: 0;
    bottom: 0;
  `;
  return (
    <>
      <img
        src={loginBackground1}
        alt="Login Background 1"
        css={firstBackground}
      />

      <img
        src={loginBackground2}
        alt="Login Background 2"
        css={secondBackground}
      />
    </>
  );
}
export default AuthBackground;
