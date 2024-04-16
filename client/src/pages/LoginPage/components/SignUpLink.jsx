/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function SignUpLink({ navigate }) {
  return (
    <>
      <div
        css={css`
          display: flex;
          gap: 10px;
        `}
      >
        <div>Don't have any account?</div>
        <div
          css={css`
            color: rgb(255, 112, 55);
            &:hover {
              cursor: pointer;
            }
          `}
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </div>
        <div>Or go to website as</div>
        <div
          css={css`
            color: rgb(255, 112, 55);
            &:hover {
              cursor: pointer;
            }
          `}
          onClick={() => {
            navigate("/");
          }}
        >
          Guest
        </div>
      </div>
    </>
  );
}
