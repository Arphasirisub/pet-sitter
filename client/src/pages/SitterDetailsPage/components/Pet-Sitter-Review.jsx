/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PetSitterReviewBox from "./Pet-Sitter-Review-Box";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { averageRatingBox } from "./Style-SitterDetailPage";
import { useBookingTools } from "../../../contexts/BookingTools";

const PetSitterReview = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const param = useParams();
  const { getSitterData, sitterData } = useBookingTools();

  useEffect(() => {
    getSitterData(param.id);
  }, []);

  const handleClearButtonClick = () => {
    setSelectedRating(0);
  };

  const handleStateChange = (value) => {
    setSelectedRating((prevRating) => (prevRating === value ? 0 : value));
  };

  const renderRatingButtons = () => {
    const buttons = [];
    for (let i = 5; i >= 1; i--) {
      buttons.push(
        <Button
          key={i}
          variant="outlined"
          size="small"
          onClick={() => handleStateChange(i)}
          sx={{
            gap: "2px",
            borderColor: selectedRating === i ? "#FF7037" : undefined, // เปลี่ยนสีของเส้นขอบเมื่อปุ่มถูกเลือก
            "&:hover": {
              borderColor: selectedRating === i ? "#FF7037" : undefined, // เปลี่ยนสีของเส้นขอบเมื่อโฮเวอร์
            },
            "&.Mui-focusVisible": {
              borderColor: selectedRating === i ? "#FF7037" : undefined, // เปลี่ยนสีของเส้นขอบเมื่อได้รับการโฟกัส
            },
          }}
        >
          <Typography color={"#5B5D6F"}>{i}</Typography>
          <Rating
            name="read-only"
            value={i}
            max={i}
            readOnly
            sx={{ color: "#1CCD83" }}
          />
        </Button>
      );
    }
    return buttons;
  };
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      <Stack
        width={1280}
        css={css`
          margin-left: 100px;
        `}
      >
        <Stack
          className="review-container"
          borderRadius={10}
          css={css`
            height: auto;
            width: 60%;
            padding: 25px;
            border-top-left-radius: 100px;
            border-bottom-left-radius: 100px;
            background-color: #f5f6f9;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          `}
        >
          <Stack
            css={css`
              border-top-left-radius: 100px;
              border-bottom-left-radius: 100px;
              background-color: white;
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
              color: white;
              padding: 15px 15px 15px 25px;
            `}
            direction="row"
            spacing={2}
            borderRadius={10}
          >
            <Stack width="20%" justifyContent={"center"} alignItems={"center"}>
              {sitterData &&
              sitterData.comments &&
              sitterData.comments.length > 0 ? (
                <Stack>
                  {sitterData.comments.reduce((comments, index) => (
                    <Box key={index} css={averageRatingBox}>
                      <Typography variant="h4">
                        {(
                          sitterData.comments.reduce(
                            (sum, comments) => sum + comments.rating,
                            0
                          ) / sitterData.comments.length
                        ).toFixed(2)}
                      </Typography>
                      <Typography variant="body2">
                        {sitterData.comments.length} Reviews
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              ) : (
                <Box
                  variant="h5"
                  borderRadius={10}
                  backgroundColor={"black"}
                  color={"white"}
                  textAlign={"center"}
                  padding={2}
                >
                  <Typography>No comments available</Typography>
                </Box>
              )}
            </Stack>
            <Stack
              width="75%"
              css={css`
                padding-left: 30px;
              `}
            >
              <Stack>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="black"
                  margin={1}
                  gutterBottom
                >
                  Rating & Review
                </Typography>
              </Stack>
              <Stack>
                <Box sx={{ "& button": { m: "2px" } }}>
                  <div>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: selectedRating === 0 ? "#FF7037" : undefined, // กำหนดสีของปุ่มตามสถานะ active/de-active
                        borderColor:
                          selectedRating === 0 ? "#FF7037" : undefined, // กำหนดสีของเส้นขอบปุ่มตามสถานะ active/de-active
                        "&:hover": {
                          borderColor:
                            selectedRating === 0 ? "#FF7037" : undefined, // เปลี่ยนสีของเส้นขอบเมื่อโฮเวอร์
                        },
                        "&.Mui-focusVisible": {
                          borderColor:
                            selectedRating === 0 ? "#FF7037" : undefined, // เปลี่ยนสีของเส้นขอบเมื่อได้รับการโฟกัส
                        },
                      }}
                      onClick={handleClearButtonClick}
                    >
                      All Reviews
                    </Button>
                    {renderRatingButtons()}
                  </div>
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <Stack width="100%">
            <PetSitterReviewBox
              comments={
                selectedRating
                  ? sitterData?.comments
                      ?.filter((comment) => comment.rating === selectedRating)
                      ?.slice((currentPage - 1) * 5, currentPage * 5)
                  : sitterData?.comments?.slice(
                      (currentPage - 1) * 5,
                      currentPage * 5
                    )
              }
            />
          </Stack>
          <Stack justifyContent="center" alignItems="center" padding="20px">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil((sitterData?.comments?.length || 0) / 5)}
                page={currentPage}
                onChange={handleChangePage}
                sx={{
                  "& .MuiPaginationItem-page": {
                    color: "grey", // เปลี่ยนสีของตัวเลข
                  },
                  "& .MuiPaginationItem-page.Mui-selected": {
                    color: "#ff7037",
                    backgroundColor: "#FFF1EC", // เปลี่ยนสีเมื่อเป็น active
                  },
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export default PetSitterReview;
