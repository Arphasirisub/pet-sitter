/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Stack from "@mui/material/Stack";
import PetSitterCard from "./Pet-Sitter-Card";
import PetSitterDetailIntro from "./Pet-Sitter-Detail-Intro";

const PetSitterDetail = () => {
  return (
    <>
      <Stack
        direction="row"
        className="body-detail"
        css={css`
          width: 1280px;
          padding-top: 60px;
        `}
      >
        <PetSitterDetailIntro />
        <PetSitterCard />
      </Stack>
    </>
  );
};
export default PetSitterDetail;
