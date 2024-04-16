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
import { useBookingTools } from "../../../contexts/BookingTools";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

function BookingResultPage() {
  const navigate = useNavigate();
  const {
    getBookingData,
    bookingId,
    setBookingId,
    bookedTimeData,
    setBookedTimeData,
    totalPrice,
    setTotalPrice,
    selectedPets,
    setSelectedPets,
    sitterData,
    setSitterData,
    ownerData,
    setCompleteStep,
    setActiveSteps,
    setMessage,
  } = useBookingTools();
  const param = useParams();
  const [durationHours, setDurationHours] = useState();

  const calculateDurationInHours = (startTime, stopTime) => {
    const start = moment(startTime);
    const stop = moment(stopTime);
    const duration = moment.duration(stop.diff(start));
    const hours = duration.asHours();
    return hours;
  };
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
    navigate(`/owner/${ownerData.id}/bookingHistory`);
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
    navigate(`/`);
  };

  useEffect(() => {
    getBookingData(param.id);
    if (bookedTimeData.find((i) => i.id === bookingId)) {
      const startTime = bookedTimeData.find(
        (i) => i.id === bookingId
      ).booked_start;
      const stopTime = bookedTimeData.find(
        (i) => i.id === bookingId
      ).booked_stop;
      const duration = calculateDurationInHours(startTime, stopTime);
      setDurationHours(duration);
    }
  }, [getBookingData, durationHours]);

  return (
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
      {bookedTimeData.find((i) => i.id === bookingId) ? (
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
                    bookedTimeData.find((i) => i.id === bookingId).created_at
                  ).format(" ddd, D MMM YYYY")}
                </Typography>
                <Typography sx={bookingResultGreyText}>
                  Transaction No. :
                  {bookedTimeData.find((i) => i.id === bookingId).id}
                </Typography>
              </Stack>
              <br />
              <Typography sx={bookingResultGreyText}>Pet Sitter:</Typography>
              <Typography sx={bookingResultBlackText}>
                {sitterData.trade_name} by {sitterData.full_name}
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
                        bookedTimeData.find((i) => i.id === bookingId)
                          .booked_start
                      ).format("D MMM, YYYY")}
                    </Typography>
                    <Typography>|</Typography>
                    <Typography sx={bookingResultBlackText}>
                      {moment(
                        bookedTimeData.find((i) => i.id === bookingId)
                          .booked_start
                      ).format("h:mm a")}
                      -
                      {moment(
                        bookedTimeData.find((i) => i.id === bookingId)
                          .booked_stop
                      ).format("h:mm a")}
                    </Typography>
                  </Stack>
                </Stack>
                <br />
                <Stack>
                  <Typography sx={bookingResultGreyText}>Duration:</Typography>
                  <Typography sx={bookingResultBlackText}>
                    {durationHours} hours
                  </Typography>
                </Stack>
              </Stack>
              <br />
              <Typography sx={bookingResultGreyText}>Pet:</Typography>
              <Stack direction={"row"}>
                {selectedPets.map((pet, index) => (
                  <Typography sx={bookingResultBlackText} key={index}>
                    {pet.pet_name}
                    {index !== selectedPets.length - 1 && ", "}
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
                  {totalPrice} THB
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Stack className="button" direction={"row"} spacing={3} marginTop={5}>
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
      ) : (
        <CircularProgress color="warning" />
      )}

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
  );
}
export default BookingResultPage;
