// step30min-----------------------------------------------------------------------------------------------------------------------------------------------
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Box,
  Modal,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { Stack } from "@mui/system";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { buttonOrange, boxModal } from "./Style-SitterDetailPage";
import { useBookingTools } from "../../../contexts/BookingTools";

const BookNowModal = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeError, setTimeError] = useState("");

  const param = useParams();
  const {
    getBookingDetailData,
    selectedTimeStart,
    setSelectedTimeStart,
    selectedTimeEnd,
    setSelectedTimeEnd,
    bookedTimeData,
  } = useBookingTools();

  const convertTime = (date, time) => {
    const startTimeParts = time.split(":");
    const startHours = parseInt(startTimeParts[0], 10);
    const startMinutes = parseInt(startTimeParts[1], 10);
    const currentDate = new Date(date);
    currentDate.setHours(startHours);
    currentDate.setMinutes(startMinutes);
    const timeStamp = currentDate.getTime();
    return timeStamp;
  };

  const start = convertTime(selectedDate, selectedTimeStart);
  const stop = convertTime(selectedDate, selectedTimeEnd);

  useEffect(() => {
    getBookingDetailData(param.id);
    if (selectedDate) {
      console.log("Start time:", start);
      console.log("Stop time:", stop);
      validateTime();
    }
  }, [selectedDate, selectedTimeStart, selectedTimeEnd]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedDate(null);
    setSelectedTimeStart("");
    setSelectedTimeEnd("");
    setOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChangeStart = (event) => {
    setSelectedTimeStart(event.target.value);
  };

  const handleTimeChangeEnd = (event) => {
    setSelectedTimeEnd(event.target.value);
  };

  const validateTime = () => {
    if (
      selectedDate &&
      selectedTimeStart &&
      selectedTimeEnd &&
      selectedTimeEnd <= selectedTimeStart
    ) {
      setTimeError("End time must be after start time");
      setSelectedDate(null);
      setSelectedTimeStart("");
      setSelectedTimeEnd("");
    } else {
      setTimeError("");
    }
  };

  const handleSubmit = () => {
    const currentTime = new Date().getTime();
    const minimumTime = currentTime + 3 * 60 * 60 * 1000; // 3 hours in milliseconds
    const isOverlapping = bookedTimeData.some((booking) => {
      const bookingStart = new Date(booking.booked_start).getTime();
      const bookingEnd = new Date(booking.booked_stop).getTime();
      return (
        (start >= bookingStart && start < bookingEnd) ||
        (stop > bookingStart && stop <= bookingEnd) ||
        (start <= bookingStart && stop >= bookingEnd)
      );
    });

    if (isOverlapping) {
      setTimeError("Invalid time between");
      console.log("Invalid time between", timeError);
      return;
    } else if (start < minimumTime || stop < minimumTime) {
      setTimeError(
        "Selected time must be at least 3 hours after of the current time"
      );
      console.error(
        "Selected time must be at least 3 hours after of the current time",
        timeError
      );
      return;
    } else if (timeError) {
      console.error("Invalid time selection:", timeError);
      return;
    } else if (!selectedDate || !selectedTimeStart || !selectedTimeEnd) {
      setTimeError("End time must be after start time");
      console.error("Invalid selection:", timeError);
      return;
    }

    navigate(`/booking/${start}/${stop}/${param.id}`);
    handleClose();
  };

  const generateTimeOptions = () => {
    const options = [];
    const startTime = 0 * 60;
    const endTime = 23.5 * 60;
    const step = 30;

    for (let time = startTime; time < endTime; time += step) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      const formattedTime = `${String(hours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}`;

      const timeSlotStart = convertTime(selectedDate, formattedTime);
      const timeSlotEnd = timeSlotStart + step * 60 * 1000;

      // ตรวจสอบว่าช่วงเวลาที่กำลังพิจารณาอยู่ไม่ซ้ำกับการจองในฐานข้อมูล
      const isOverlapping = bookedTimeData.some((booking) => {
        const bookingStart = new Date(booking.booked_start).getTime();
        const bookingEnd = new Date(booking.booked_stop).getTime();
        return (
          (timeSlotStart >= bookingStart && timeSlotStart < bookingEnd) ||
          (timeSlotEnd > bookingStart && timeSlotEnd <= bookingEnd) ||
          (timeSlotStart <= bookingStart && timeSlotEnd >= bookingEnd)
        );
      });

      if (!isOverlapping) {
        options.push({
          value: formattedTime,
          label: formattedTime,
          disabled: false,
        });
      } else if (isOverlapping) {
        options.push({
          value: formattedTime,
          label: formattedTime,
          disabled: true,
        });
      }
    }

    return options;
  };

  return (
    <>
      <Stack
        css={css`
          border-top: 1px solid #e0e0e0;
        `}
      >
        <Button onClick={handleOpen} sx={buttonOrange}>
          Book Now
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...boxModal, width: 500 }}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              marginBottom={5}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                id="parent-modal-title"
              >
                Booking
              </Typography>
              <Button
                onClick={handleClose}
                sx={{
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#fff1ec",
                    color: "#ff7037",
                  },
                }}
              >
                X
              </Button>
            </Stack>
            <Typography id="parent-modal-description" marginBottom={2}>
              Select date and time you want to schedule the service.
            </Typography>
            <form>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack marginBottom={2}>
                  <DatePicker
                    label="Select Date"
                    value={selectedDate}
                    disablePast={true}
                    onChange={(newDate) => handleDateChange(newDate)}
                    textField={(params) => (
                      <TextField {...params} variant="standard" />
                    )}
                  />
                </Stack>

                <Stack
                  direction={"row"}
                  justifyContent={"space-around"}
                  spacing={2}
                >
                  <Select
                    value={selectedTimeStart}
                    onChange={handleTimeChangeStart}
                    label="Select Time Start"
                    variant="standard"
                    sx={{ mt: 2, width: "200px" }}
                  >
                    {generateTimeOptions().map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  <Typography>To</Typography>
                  <Select
                    value={selectedTimeEnd}
                    onChange={handleTimeChangeEnd}
                    label="Select Time End"
                    variant="standard"
                    sx={{ mt: 2, width: "200px" }}
                  >
                    {generateTimeOptions().map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </LocalizationProvider>
              {timeError && (
                <Typography variant="body1" color="error">
                  {timeError}
                </Typography>
              )}
              <Button onClick={handleSubmit} sx={buttonOrange}>
                Submit
              </Button>
            </form>
          </Box>
        </Modal>
      </Stack>
    </>
  );
};

export default BookNowModal;
