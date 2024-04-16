import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const myHistoryToolsContext = createContext();
const useMyHistoryTools = () => useContext(myHistoryToolsContext);

function MyHistoryToolsProvider(props) {
  const [ownerBookings, setOwnerBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState({});

  const getHistory = async () => {
    try {
      const result = await axios(`http://localhost:4000/bookings/mybookings`);
      const sortedData = result.data.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      console.log(sortedData);
      setOwnerBookings(sortedData);
    } catch (error) {
      console.log(error);
    }
  };

  const postReview = async (sitterId, content, rating, booking_id) => {
    try {
      await axios.post(`http://localhost:4000/comments/myPost/${sitterId}`, {
        content: content,
        rating: rating,
        booking_id: booking_id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <myHistoryToolsContext.Provider
      value={{
        ownerBookings,
        setOwnerBookings,
        getHistory,
        postReview,
        selectedBooking,
        setSelectedBooking,
      }}
    >
      {props.children}
    </myHistoryToolsContext.Provider>
  );
}

export { MyHistoryToolsProvider, useMyHistoryTools };
