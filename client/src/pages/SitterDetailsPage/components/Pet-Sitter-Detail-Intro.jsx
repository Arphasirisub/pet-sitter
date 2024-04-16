/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useBookingTools } from "../../../contexts/BookingTools";

const PetSitterDetailIntro = () => {
  const param = useParams();
  const { getSitterData, sitterData } = useBookingTools();

  useEffect(() => {
    getSitterData(param.id);
  }, []);

  return (
    <>
      <Stack
        direction="row"
        className="body-detail"
        width="60%"
        paddingLeft="10%"
        paddingRight="8%"
      >
        {sitterData ? (
          <Stack>
            <Typography
              className="pet-sitter-name"
              variant="h3"
              gutterBottom
              fontWeight="bold"
              css={css`
                margin-bottom: 40px;
              `}
            >
              {sitterData.trade_name}
            </Typography>
            <Box
              className="introduction"
              css={css`
                margin-bottom: 40px;
              `}
            >
              <Typography
                className="pet-sitter-intro"
                variant="h6"
                gutterBottom
                fontWeight="bold"
              >
                Introduction
              </Typography>
              <Typography
                className="pet-sitter-intro-subtitle"
                variant="subtitle2"
                color={"#5B5D6F"}
                gutterBottom
              >
                {sitterData?.introduction}
              </Typography>
            </Box>
            <Box
              className="introduction"
              css={css`
                margin-bottom: 40px;
              `}
            >
              <Typography
                className="pet-sitter-intro"
                variant="h6"
                gutterBottom
                fontWeight="bold"
              >
                Service
              </Typography>
              <Typography
                className="pet-sitter-service-subtitle"
                variant="subtitle2"
                color={"#5B5D6F"}
                gutterBottom
              >
                {sitterData?.service}
              </Typography>
            </Box>
            <Box
              className="my-place"
              css={css`
                margin-bottom: 40px;
              `}
            >
              <Typography
                className="pet-sitter-my-place"
                variant="h6"
                gutterBottom
                fontWeight="bold"
              >
                My Place
              </Typography>
              <Typography
                className="pet-sitter-my-place-subtitle"
                variant="subtitle2"
                color={"#5B5D6F"}
                gutterBottom
              >
                {sitterData?.my_place}
              </Typography>
            </Box>
          </Stack>
        ) : (
          <CircularProgress color="warning" />
        )}
      </Stack>
    </>
  );
};
export default PetSitterDetailIntro;
