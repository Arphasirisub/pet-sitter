/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useBookingTools } from "../../../contexts/BookingTools";
import { useAuth } from "../../../contexts/authentication";
import { useEffect } from "react";
import WarningModal from "../components/WarningModal";
function InformationTaps() {
  const {
    ownerData,
    getOwnerData,
    setActiveSteps,
    setCompleteStep,
    completeStep,
    message,
    setMessage,
    setShowWarningModal,
    showWarningModal,
    setOwnerData,
    isUpdateCalendar,
    setIsUpdateCalendar,
  } = useBookingTools();
  const { state } = useAuth();
  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate("/login");
    }
    getOwnerData();
  }, []);
  return (
    <>
      <WarningModal />
      <div
        css={css`
          height: fit-content;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          padding: 50px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        `}
      >
        <div>
          <div>Your Name*</div>
          <TextField
            css={css`
              width: 100%;
            `}
            value={ownerData.full_name || ""}
          />
        </div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            width: 100%;
          `}
        >
          <div
            css={css`
              width: 45%;
            `}
          >
            <div>Email*</div>
            <TextField
              css={css`
                width: 100%;
              `}
              value={ownerData.email || ""}
            />
          </div>
          <div
            css={css`
              width: 45%;
            `}
          >
            <div>Phone*</div>
            <TextField
              css={css`
                width: 100%;
              `}
              value={ownerData.phone || ""}
            />
          </div>
        </div>
        <div>
          <div>Additional Message (To petsitter)</div>
          <TextField
            id="outlined-read-only-input"
            variant="outlined"
            multiline
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            rows={4}
            css={css`
              width: 100%;
            `}
          />
        </div>

        <div
          css={css`
            display: flex;
            align-items: center;
            color: rgb(123, 126, 143);
            gap: 10px;
          `}
        >
          {" "}
          <img
            src="https://logowik.com/content/uploads/images/google-calendar5094.jpg"
            css={css`
              width: 100px;
            `}
          ></img>
          <input
            type="checkbox"
            name="checkbox"
            value={isUpdateCalendar}
            onChange={(e) => {
              setIsUpdateCalendar(e.target.checked);
            }}
          ></input>
          <label for="checkbox">Update to your google calendar?</label>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            margin-top: 40px;
          `}
        >
          <Button
            css={css`
              padding: 10px;
              padding-left: 25px;
              padding-right: 25px;
              border-radius: 25px;
              color: rgb(255, 112, 55);
              background-color: rgb(255, 241, 236);
              transition: color 0.3s ease;
              &:hover {
                color: black;
              }
            `}
            onClick={() => {
              if (message) {
                setShowWarningModal(true);
              } else {
                setCompleteStep((prevCompleteStep) => ({
                  ...prevCompleteStep,
                  information: false,
                }));
                setActiveSteps("yourPet");
              }
            }}
          >
            Back
          </Button>
          <Button
            css={css`
              padding: 10px;
              padding-left: 25px;
              padding-right: 25px;
              border-radius: 25px;
              color: rgb(255, 112, 55);
              background-color: rgb(255, 241, 236);
              transition: color 0.3s ease;
              &:hover {
                color: black;
              }
            `}
            onClick={() => {
              setCompleteStep((prevCompleteStep) => ({
                ...prevCompleteStep,
                information: true,
              }));
              setActiveSteps("payment");
              if (isUpdateCalendar === true) {
                // Construct the URL for Google OAuth2 consent screen
                const authUrl = "http://localhost:4000/google";

                // Open the consent screen in a new tab
                window.open(authUrl, "_blank");
              }
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
export default InformationTaps;
