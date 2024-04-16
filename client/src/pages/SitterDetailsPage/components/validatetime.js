const validateTime = (
  selectedTimeStart,
  selectedTimeEnd,
  setTimeError,
  setSelectedDate,
  setSelectedTimeStart,
  setSelectedTimeEnd,
  setTimeError
) => {
  if (
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
export default validateTime;
