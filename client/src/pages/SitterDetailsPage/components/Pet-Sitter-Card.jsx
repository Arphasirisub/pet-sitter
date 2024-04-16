/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Avatar,
  Card,
  CardContent,
  CircularProgress,
  Typography,
  Rating,
  Stack,
} from "@mui/material";
import RoomSharpIcon from "@mui/icons-material/RoomSharp";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BookNowModal from "./Pet-Sitter-Card-Book-Now";
import {
  petTypeIcon,
  dogIconStyle,
  catIconStyle,
  rabbitIconStyle,
  birdIconStyle,
} from "../../SearchListPage/components/Style";
import { useBookingTools } from "../../../contexts/BookingTools";

const PetSitterCard = () => {
  const param = useParams();
  const { getSitterData, sitterData } = useBookingTools();

  const calculateAverageRating = () => {
    if (sitterData && sitterData?.comments && sitterData?.comments.length > 0) {
      const totalRating = sitterData.comments.reduce(
        (acc, comment) => acc + comment.rating,
        0
      );
      const average = totalRating / sitterData.comments.length;
      const fractionalPart = average % 1;
      return fractionalPart >= 0.5 ? Math.ceil(average) : Math.floor(average);
    }
    return 0;
  };

  const averageRating = calculateAverageRating();

  useEffect(() => {
    getSitterData(param.id);
  }, []);

  return (
    <>
      <Stack>
        <div>
          <Card
            sx={{
              width: 345,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderRadius: 5,
              boxShadow: 20,
              padding: 2,
              marginRight: 8,
            }}
          >
            <Stack
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Avatar
                alt={sitterData.full_name}
                src={sitterData.profile_img}
                sx={{
                  width: 140,
                  height: 140,
                }}
              />
            </Stack>

            <CardContent
              sx={{
                marginBottom: 5,
              }}
            >
              <Typography
                className="pet-sitter-name"
                gutterBottom
                variant="h4"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {sitterData.trade_name}
              </Typography>
              <Stack
                className="pet-sitter-name-and-exp"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography
                  className="pet-sitter-full-name"
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  {sitterData.full_name}
                </Typography>
                <Typography
                  className="pet-sitter-Exp"
                  variant="subtitle1"
                  gutterBottom
                  sx={{ color: "#1CCD83" }}
                >
                  {sitterData.experience} Year Exp.
                </Typography>
              </Stack>

              <Rating
                name="read-only"
                value={averageRating}
                max={averageRating}
                precision={0.5}
                readOnly
                sx={{ color: "#1CCD83" }}
              />

              <Stack
                className="pet-sitter-location-content"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  margin: 2,
                }}
              >
                <RoomSharpIcon
                  className="location-icon"
                  sx={{ color: "grey" }}
                />
                <Typography className="pet-sitter-location" color="grey">
                  {sitterData.district}, {sitterData.province}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} justifyContent={"center"}>
                {sitterData.dog === true ? (
                  <div className="dog" css={[petTypeIcon, dogIconStyle]}>
                    Dog
                  </div>
                ) : null}

                {sitterData.cat === true ? (
                  <div className="cat" css={[petTypeIcon, catIconStyle]}>
                    Cat
                  </div>
                ) : null}

                {sitterData.bird === true ? (
                  <div className="bird" css={[petTypeIcon, birdIconStyle]}>
                    Bird
                  </div>
                ) : null}

                {sitterData.rabbit === true ? (
                  <div className="rabbit" css={[petTypeIcon, rabbitIconStyle]}>
                    Rabbit
                  </div>
                ) : null}
              </Stack>
            </CardContent>
            <BookNowModal />
          </Card>
        </div>
      </Stack>
    </>
  );
};
export default PetSitterCard;
