/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Stack, Typography, Avatar } from "@mui/material";
import Rating from "@mui/material/Rating";

const PetSitterReviewBox = ({ comments }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <>
      <Stack className="container-review-box">
        {comments?.map((comment, index) => (
          <Stack
            key={index}
            className="children-review-box"
            direction="row"
            spacing={2}
            padding={2}
            paddingBottom={10}
            marginTop={5}
            css={css`
              border-bottom: 1px solid #e0e0e0;
            `}
          >
            <Stack className="profile-reviewer" width="30%" direction="row">
              <Stack>
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt=""
                    src={comment.owner_id.profile_img}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Stack>
                    <Typography
                      variant="subtitle1"
                      display="block"
                      gutterBottom
                      fontWeight={"bold"}
                    >
                      {comment.owner_id.full_name}
                    </Typography>
                    <Typography
                      variant="body2"
                      display="block"
                      gutterBottom
                      color="#7B7E8F"
                      fontWeight={"bold"}
                    >
                      {formatDate(comment.created_at)}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              className="comment-reviewer"
              width="70%"
              spacing={2}
              css={css`
                padding: 0px 20px 0px 20px;
              `}
            >
              <Rating
                name="read-only"
                value={comment.rating}
                max={comment.rating}
                readOnly
                sx={{ color: "#1CCD83" }}
              />
              <Typography>{comment.content}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default PetSitterReviewBox;
