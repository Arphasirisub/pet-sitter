/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PetList from "../YourPetTaps/PetList";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import VerifyModal from "../components/VerifyModal";
import { useBookingTools } from "../../../contexts/BookingTools";
import WarningModal from "../components/WarningModal";

function YourPetTaps() {
  const navigate = useNavigate();
  const params = useParams();
  const {
    setShowVerifyModal,
    setShowWarningModal,
    setActiveSteps,
    setCompleteStep,
    completeStep,
    selectedPets,
  } = useBookingTools();
  return (
    <>
      <div
        css={css`
          height: fit-content;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          padding: 25px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        `}
      >
        <div>Choose your pet</div>
        <PetList />
        <div
          css={css`
            display: flex;
            justify-content: space-between;
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
              if (selectedPets.length > 0) {
                setShowWarningModal(true);
              } else {
                navigate(`/detail/${params.id}`);
                setCompleteStep({
                  yourPet: false,
                  information: false,
                  payment: false,
                });
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
              if (selectedPets.length > 0) {
                setActiveSteps("information");
                setCompleteStep((prevCompleteStep) => ({
                  ...prevCompleteStep,
                  yourPet: true,
                }));
              } else {
                setShowVerifyModal(true);
              }
            }}
          >
            Next
          </Button>
        </div>
      </div>
      <VerifyModal />
      <WarningModal />
    </>
  );
}
export default YourPetTaps;
