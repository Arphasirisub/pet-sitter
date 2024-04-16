/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Stack } from "@mui/system";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import bookingResultRight from "../../../PublicPicture/bookingResultRight.svg";
import bookingResultLeft from "../../../PublicPicture/bookingResultLeft.svg";
import { useNavigate, useParams } from "react-router-dom";
import {
  bookingResultBlackText,
  bookingResultContainer,
  bookingResultGreyText,
  bookingResultHeaderText,
  buttonBookingResult,
  resultBoxContent,
  resultBoxMain,
  resultHeader,
} from "./BookingResultPageStyle";
import moment from "moment";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useBookingTools } from "../../../contexts/BookingTools";
import Navbar from "../../../public-components/Navbar";

function BookingResultPageByCard() {
  const navigate = useNavigate();
  const param = useParams();
  const [durationHours, setDurationHours] = useState(0);
  const {
    getBookingResult,
    setMessage,
    setActiveSteps,
    bookingResult,
    setBookingResult,
    setBookedTimeData,
    setTotalPrice,
    setSelectedPets,
    setBookingId,
    setCompleteStep,
    setConfirmPayment,
    confirmStatus,
    setConfirmStatus,
  } = useBookingTools();

  const handleBookingHistory = () => {
    setBookedTimeData([]);
    setTotalPrice(0);
    setSelectedPets([]);
    setBookingId(null);
    setCompleteStep({
      yourPet: false,
      information: false,
      payment: false,
    });
    setMessage("");
    setActiveSteps("yourPet");
    setDurationHours(0);
    setConfirmPayment(false);
    setConfirmStatus(false);
    navigate(`/owner/${bookingResult[0].owner_id}/bookingHistory`);
  };

  const handleBackToHome = () => {
    setBookedTimeData([]);
    setTotalPrice(0);
    setSelectedPets([]);
    setBookingId(null);
    setCompleteStep({
      yourPet: false,
      information: false,
      payment: false,
    });
    setMessage("");
    setActiveSteps("yourPet");
    setDurationHours(0);
    setConfirmPayment(false);
    setConfirmStatus(false);
    navigate(`/`);
  };

  useEffect(() => {
    getBookingResult(param.bookingId);
  }, []);
  return (
    <>
      <Stack
        css={css`
          height: 100vh;
        `}
      >
        <Navbar />
        <Stack
          className="bookingResult-container"
          direction={"row"}
          sx={bookingResultContainer}
        >
          <Stack
            className="pic-left"
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <img
              src={bookingResultLeft}
              alt="Booking Result Left"
              height={"480px"}
              width={"400px"}
            />
          </Stack>
          <Stack
            sx={{
              width: " 600px",
              height: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box className="result-header" css={resultHeader}>
              <Box className="resultBoxMain" css={resultBoxMain}>
                <Typography
                  className="bookingResultHeadText"
                  sx={bookingResultHeaderText}
                >
                  Thank You For Booking
                </Typography>
                <Typography sx={bookingResultGreyText}>
                  We will send your booking information to Pet Sitter.
                </Typography>
              </Box>
              <br />
              <Box className="resultBoxContent" css={resultBoxContent}>
                <Stack>
                  <Typography sx={bookingResultGreyText}>
                    Transaction Date:
                    {moment(
                      bookingResult.length > 0 && bookingResult[0].created_at
                    ).format(" ddd, D MMM YYYY")}
                  </Typography>
                  <Typography sx={bookingResultGreyText}>
                    Transaction No.:
                    {bookingResult.length > 0 && bookingResult[0].id}
                  </Typography>
                </Stack>
                <br />
                <Typography sx={bookingResultGreyText}>Pet Sitter:</Typography>
                <Typography sx={bookingResultBlackText}>
                  {bookingResult.length > 0 &&
                    `${bookingResult[0].sitter_id.trade_name} by ${bookingResult[0].sitter_id.full_name}`}
                </Typography>
                <br />
                <Stack direction={"row"} spacing="60px">
                  <Stack>
                    <Typography sx={bookingResultGreyText}>
                      Date & Time:
                    </Typography>
                    <Stack direction={"row"} spacing={1}>
                      <Typography sx={bookingResultBlackText}>
                        {moment(
                          bookingResult.length > 0 &&
                            bookingResult[0].booked_start
                        ).format("D MMM, YYYY")}
                      </Typography>
                      <Typography>|</Typography>
                      <Typography sx={bookingResultBlackText}>
                        {moment(
                          bookingResult.length > 0 &&
                            bookingResult[0].booked_start
                        ).format("h:mm a")}
                        -
                        {moment(
                          bookingResult.length > 0 &&
                            bookingResult[0].booked_stop
                        ).format("h:mm a")}
                      </Typography>
                    </Stack>
                  </Stack>
                  <br />
                  <Stack>
                    <Typography sx={bookingResultGreyText}>
                      Duration:
                    </Typography>
                    {bookingResult.length > 0 &&
                      bookingResult.map((booking, index) => (
                        <Typography key={index} sx={bookingResultBlackText}>
                          {booking.duration} hours
                        </Typography>
                      ))}
                  </Stack>
                </Stack>
                <br />
                <Typography sx={bookingResultGreyText}>Pet:</Typography>
                <Stack direction={"row"}>
                  {bookingResult.length > 0 &&
                    bookingResult[0].pet_bookings.map((booking, index) => (
                      <Typography key={index} sx={bookingResultBlackText}>
                        {booking.pet_id.pet_name}
                        {index !== bookingResult[0].pet_bookings.length - 1 &&
                          ", "}
                      </Typography>
                    ))}
                </Stack>
                <br />
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  paddingTop={2}
                  borderTop={2}
                  borderColor={"#94959d"}
                >
                  <Typography sx={bookingResultBlackText}>Total</Typography>
                  <Typography sx={bookingResultBlackText}>
                    {bookingResult.length > 0 && `${bookingResult[0].price}`}{" "}
                    THB
                  </Typography>
                </Stack>
              </Box>
            </Box>
            <Stack
              className="button"
              direction={"row"}
              spacing={3}
              marginTop={5}
            >
              <Button
                className="booking-history"
                onClick={handleBookingHistory}
                sx={buttonBookingResult}
              >
                Booking Detail
              </Button>
              <Button
                className="booking-history"
                onClick={handleBackToHome}
                sx={buttonBookingResult}
              >
                Back To Home
              </Button>
            </Stack>
          </Stack>
          <Stack
            className="pic-right"
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
          >
            <img
              src={bookingResultRight}
              alt="Booking Result Right"
              height={"480px"}
              width={"400px"}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
export default BookingResultPageByCard;
