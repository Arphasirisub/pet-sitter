import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BookingToolsContext = createContext();
const useBookingTools = () => useContext(BookingToolsContext);

function BookingToolsProvider(props) {
  //fetching tools
  const getPets = async (owner_id) => {
    try {
      setPetsResults({ ...petsResults, isLoading: true, isError: false });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const results = await axios.get(
        `http://localhost:4000/pets/myPets/` //its attached token in request, token will verify by middleware if vilid token, will extract token and add userId to req.
      );
      setPetsResults({
        data: results.data.data,
        isError: false,
        isLoading: false,
      });
    } catch (error) {
      setPetsResults({ ...petsResults, isError: true, isLoading: false });
    }
  };

  const getSitterData = async (sitter_id) => {
    try {
      const result = await axios.get(
        `http://localhost:4000/sitters/${sitter_id}`
      );
      setSitterData(result.data);
    } catch (error) {
      console.error("Error while fetching available pet types:", error);
    }
  };

  const getOwnerData = async () => {
    try {
      const result = await axios.get(`http://localhost:4000/owners/myProfile`);
      setOwnerData(result.data.data.data);
    } catch (error) {
      console.error("Error while fetching available pet types:", error);
    }
  };

  const getBookingData = async (sitter_id) => {
    try {
      const response2 = await axios.get(
        `http://localhost:4000/bookings/sitter/${sitter_id}`,
        {
          params: {
            booked_start: selectedTimeStart, // ส่งวันที่ที่เลือกไปเพื่อดึงการนัดหมายในวันนั้น
            booked_stop: selectedTimeEnd,
            id: bookingId,
          },
        }
      );

      // console.log(response2);
      setBookedTimeData(response2.data);
    } catch (error) {
      console.error("Error fetching sitter details:", error);
    }
  };

  const getBookingDetailData = async (sitter_id) => {
    try {
      const response2 = await axios.get(
        `http://localhost:4000/bookings/detail/${sitter_id}`,
        {
          params: {
            booked_start: selectedTimeStart, // ส่งวันที่ที่เลือกไปเพื่อดึงการนัดหมายในวันนั้น
            booked_stop: selectedTimeEnd,
            id: bookingId,
          },
        }
      );

      // console.log(response2);
      setBookedTimeData(response2.data);
    } catch (error) {
      console.error("Error fetching sitter details:", error);
    }
  };

  const getBookingResult = async (booking_id) => {
    try {
      const results = await axios.get(
        `http://localhost:4000/bookings/myBookingResult/${booking_id}`
      );
      setBookingResult(results.data);
      // console.log(results.data);
    } catch (error) {
      console.error("Error fetching booking details:", error);
    }
  };

  //global state
  const [selectedPets, setSelectedPets] = useState([]);
  const [petsResults, setPetsResults] = useState({
    data: [],
    isError: false,
    isLoading: false,
  });

  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [sitterData, setSitterData] = useState({});
  const [ownerData, setOwnerData] = useState({});
  const [selectedTimeStart, setSelectedTimeStart] = useState("");
  const [selectedTimeEnd, setSelectedTimeEnd] = useState("");
  const [bookedTimeData, setBookedTimeData] = useState([]);
  const [activeSteps, setActiveSteps] = useState("yourPet");
  const [completeStep, setCompleteStep] = useState({
    yourPet: false,
    information: false,
    payment: false,
  });
  const [message, setMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [bookingId, setBookingId] = useState(null);
  const [bookingResult, setBookingResult] = useState([]);
  const [confirmPayment, setConfirmPayment] = useState(false);
  const [confirmStatus, setConfirmStatus] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState("card");
  const [paymentId, setPaymentId] = useState("");
  const [isUpdateCalendar, setIsUpdateCalendar] = useState(false);

  //handle toggle pets
  const toggleSelection = (pet) => {
    setSelectedPets((prev) =>
      prev.some((selectedPet) => selectedPet.id === pet.id)
        ? prev.filter((selectedPet) => selectedPet.id !== pet.id)
        : [...prev, pet]
    );
  };

  return (
    <BookingToolsContext.Provider
      value={{
        selectedPets,
        setSelectedPets,
        petsResults,
        setPetsResults,
        getPets,
        toggleSelection,
        setShowVerifyModal,
        showVerifyModal,
        showWarningModal,
        setShowWarningModal,
        getSitterData,
        sitterData,
        getOwnerData,
        ownerData,
        selectedTimeEnd,
        setSelectedTimeEnd,
        selectedTimeStart,
        setSelectedTimeStart,
        getBookingData,
        bookedTimeData,
        setBookedTimeData,
        activeSteps,
        setActiveSteps,
        completeStep,
        setCompleteStep,
        message,
        setMessage,
        totalPrice,
        setTotalPrice,
        bookingId,
        setBookingId,
        getBookingResult,
        bookingResult,
        setBookingResult,
        confirmPayment,
        setConfirmPayment,
        confirmStatus,
        setConfirmStatus,
        getBookingDetailData,
        paymentMethods,
        setPaymentMethods,
        paymentId,
        setPaymentId,
        isUpdateCalendar,
        setIsUpdateCalendar,
      }}
    >
      {props.children}
    </BookingToolsContext.Provider>
  );
}

export { BookingToolsProvider, useBookingTools };
