/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { paginationContainer } from "./Style";

function PaginationBar() {
  return (
    <div css={paginationContainer}>
      <Stack spacing={2}>
        <Pagination count={10} />
      </Stack>
    </div>
  );
}

export default PaginationBar