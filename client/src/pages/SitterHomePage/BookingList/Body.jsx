/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CustomizedTables from "./TableContent";
import { useState, useEffect } from "react";
import axios from "axios";
import { Stack } from "@mui/system";
import { Pagination } from "@mui/material";

const bodyStyle = css`
  display: flex;
  width: 100%;
  padding: 40px 0px 80px 0px;
  flex-direction: column;
  gap: 24px;
`;

const topicStyle = css`
  display: flex;
  justify-content: space-between;
  width: 1120px;
  padding-left: 40px;
`;

const inputStyle = css`
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 10px;
  width: 170px;
  color: rgba(123, 126, 143, 1);
  background-color: rgba(255, 255, 255, 1);
`;

const fontStyle = css`
  color: rgba(42, 46, 63, 1);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
`;

const topicInputStyle = css`
  display: flex;
  gap: 15px;
`;

const Body = ({ setIsProfilePage }) => {
  const [booked, setbooked] = useState("");
  const [fetchData, setFetchData] = useState([]);
  const [bookingHistory, setBookingHistory] = useState([]);
  const [fillterStatus, setFillterStatus] = useState("");

  const fetchBookingHistory = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/bookings/sitterHomepage`
      );
      console.log(result);
      setFetchData(result.data);
      setBookingHistory(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searching = () => {
    let filterbooking = fetchData;

    try {
      if (booked) {
        filterbooking = filterbooking.filter((booking) => {
          return booking.owners.full_name
            .toLowerCase()
            .includes(booked.toLowerCase());
        });
      }

      if (fillterStatus) {
        filterbooking = filterbooking.filter(
          (booking) =>
            booking.status.toLowerCase() === fillterStatus.toLowerCase()
        );
      }

      console.log(filterbooking);
      setBookingHistory(filterbooking);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searching();
  }, [booked, fillterStatus]);

  useEffect(() => {
    fetchBookingHistory();
  }, []);

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bookingHistory.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container_body" css={bodyStyle}>
      <div className="section_topic" css={topicStyle}>
        <h3 css={fontStyle}>Booking List</h3>
        <div className="topic_input" css={topicInputStyle}>
          <input
            type="text"
            placeholder="Search..."
            css={inputStyle}
            onChange={(event) => setbooked(event.target.value)}
            value={booked}
          />
          <select
            className="dropdown"
            css={inputStyle}
            onChange={(event) => setFillterStatus(event.target.value)}
            value={fillterStatus}
          >
            <option value="">All status</option>
            <option value="Success">Success</option>
            <option value="In service">In service</option>
            <option value="Waiting for service">Waiting for service</option>
            <option value="Waiting for confirm">Waiting for confirm</option>
            <option value="Canceled">Canceled</option>
          </select>
        </div>
      </div>
      <div
        className="section_table"
        css={css`
          display: flex;
          padding-left: 40px;
          padding-right: 110px;
        `}
      >
        <CustomizedTables
          booked={booked}
          setIsProfilePage={setIsProfilePage}
          fetchData={fetchData}
          setFetchData={setFetchData}
          bookingHistory={bookingHistory}
          setBookingHistory={setBookingHistory}
          fetchBookingHistory={fetchBookingHistory}
          searching={searching}
          currentItems={currentItems}
          fillterStatus={fillterStatus}
        />
      </div>
      <Stack alignItems={"center"} width="1120px">
        <Pagination
          count={Math.ceil(bookingHistory.length / itemsPerPage)}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
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
    </div>
  );
};

export default Body;
