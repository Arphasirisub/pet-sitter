/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function LoginLink({ navigate }) {
  return (
    <>
      <div
        css={css`
          display: flex;
          gap: 10px;
        `}
      >
        <div>Already have an account?</div>
        <div
          css={css`
            color: rgb(255, 112, 55);
            &:hover {
              cursor: pointer;
            }
          `}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </div>
      </div>
    </>
  );
}

export default LoginLink;
