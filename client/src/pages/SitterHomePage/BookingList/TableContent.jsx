import * as React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { LuDot } from "react-icons/lu";
import { RxDotFilled } from "react-icons/rx";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/authentication";
import { useNavigate } from "react-router-dom";

const RoundedTableContainer = styled(TableContainer)({
  borderRadius: "20px",
  overflow: "hidden",
  width: "1125px",
});

const getColorByStatus = (status) => {
  switch (status) {
    case "In service":
      return "#76d0fc";
    case "Waiting for confirm":
      return "#fa8ac0";
    case "Waiting for service":
      return "#ffca62";
    case "Success":
      return "#1ecd83";
    case "Canceled":
      return "#ea1110";
    default:
      return "black";
  }
};

const StyledTableCell = styled(TableCell)(({ theme, status }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: "start",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "16px",
    color: getColorByStatus(status),
    padding: "20px 16px",
    textAlign: "start",
    fontWeight: "500",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function CustomizedTables({
  booked,
  setIsProfilePage,
  fetchData,
  setFetchData,
  bookingHistory,
  setBookingHistory,
  fetchBookingHistory,
  searching,
  currentItems,
  fillterStatus,
}) {
  const { state, checkToken } = useAuth();
  const navigate = useNavigate();
  const [selectedBooking, setSelectedBooking] = useState({});

  useEffect(() => {
    checkToken();
  }, []);

  console.log(fetchData);

  return (
    <RoundedTableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Pet Owner Name</StyledTableCell>
            <StyledTableCell align="right">Pet(s)</StyledTableCell>
            <StyledTableCell align="right">Duration</StyledTableCell>
            <StyledTableCell align="right">Booked Date</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentItems.map((row, index) => (
            <StyledTableRow
              key={index}
              css={css`
                cursor: pointer;
              `}
              onClick={() => {
                setIsProfilePage(true);
                setSelectedBooking(row);
                navigate(`/sitter/${state.user.id}/booking-list/${row.id}`);
              }}
            >
              <StyledTableCell
                component="th"
                scope="row"
                css={css`
                  width: 240px;
                `}
              >
                {row.owners.full_name}
              </StyledTableCell>
              <StyledTableCell
                align="right"
                css={css`
                  width: 120px;
                `}
              >
                {row.pets}
              </StyledTableCell>
              <StyledTableCell
                align="right"
                css={css`
                  width: 120px;
                `}
              >
                {row.duration} hours
              </StyledTableCell>
              <StyledTableCell
                align="right"
                css={css`
                  width: 420px;
                `}
              >
                {row.booked_date}
              </StyledTableCell>
              <StyledTableCell
                align="right"
                status={row.status}
                css={css`
                  display: flex;
                  align-items: center;
                  justify-content: flex-end;
                  width: 220px;
                `}
              >
                {row.status}
                <RxDotFilled />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </RoundedTableContainer>
  );
}

export default CustomizedTables;
