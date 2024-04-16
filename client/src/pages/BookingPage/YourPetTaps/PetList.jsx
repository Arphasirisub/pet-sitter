/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useAuth } from "../../../contexts/authentication";
import { BsPlusCircle } from "react-icons/bs";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useBookingTools } from "../../../contexts/BookingTools";
import { BsCheckLg } from "react-icons/bs";
import { useParams } from "react-router-dom";

function PetList() {
  const params = useParams();
  const navigate = useNavigate();
  const { state } = useAuth();
  const {
    petsResults,
    getPets,
    toggleSelection,
    selectedPets,
    sitterData,
    getSitterData,
  } = useBookingTools();

  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate("/login");
      return;
    }
    // const ownerId = localStorage.getItem("id");
    getPets();
    getSitterData(params.id);
  }, []);

  return (
    <div>
      {/* Display loading spinner if data is loading */}
      {petsResults.isLoading && (
        <div
          css={css`
            display: flex;
            height: 500px;
            align-items: center;
            justify-content: center;
          `}
        >
          <CircularProgress size={200} color="primary" />
        </div>
      )}

      {/* Display error message if there is an error */}
      {petsResults.isError && (
        <div
          css={css`
            display: flex;
            height: 500px;
            align-items: center;
            justify-content: center;
            color: red;
            font-size: 20px;
          `}
        >
          Error fetching pets data.
        </div>
      )}

      {/* Display pets data when loading is complete and no error */}
      {!petsResults.isLoading && !petsResults.isError && (
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
            gap: 20px;
          `}
        >
          {/* Map over pets data and display each pet */}
          {petsResults.data.map((pet) => (
            <div
              key={pet.id}
              onClick={() =>
                sitterData[pet.pet_type.toLowerCase()]
                  ? toggleSelection(pet)
                  : null
              }
              css={css`
                position: relative;
                aspect-ratio: 1;
                border: solid 1px;
                border-color: ${sitterData[pet.pet_type.toLowerCase()]
                  ? selectedPets.some(
                      (selectedPet) => selectedPet.id === pet.id
                    )
                    ? "rgb(255, 112, 55)"
                    : "#dadada"
                  : "#dadada"};
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 10px;
                cursor: ${sitterData[pet.pet_type.toLowerCase()]
                  ? "pointer"
                  : "not-allowed"};
                transition: background-color 0.3s;
                overflow: hidden;
                background-color: ${sitterData[pet.pet_type.toLowerCase()]
                  ? "transparent"
                  : "rgb(214, 217, 221)"};
              `}
            >
              {/* Transparent overlay */}
              <div
                css={css`
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: ${sitterData[pet.pet_type.toLowerCase()]
                    ? "none"
                    : "rgba(255, 255, 255, 0.5)"};
                  pointer-events: none;
                `}
              ></div>
              <img
                src={pet.picture}
                css={css`
                  width: 38%;
                  aspect-ratio: 1;
                  border-radius: 100%;
                `}
              />
              <div>{pet.pet_name}</div>
              <div
                css={css`
                  border: solid 1px;
                  border-radius: 10px;
                  padding-left: 8px;
                  padding-right: 8px;
                  color: ${pet.pet_type === "Dog"
                    ? "rgb(28, 205, 131)"
                    : pet.pet_type === "Cat"
                    ? "rgb(250, 138, 192)"
                    : pet.pet_type === "Bird"
                    ? "rgb(117, 208, 252)"
                    : pet.pet_type === "Rabbit"
                    ? "rgb(255, 152, 110)"
                    : "initial"};
                  background-color: ${pet.pet_type === "Dog"
                    ? "rgb(219, 240, 231)"
                    : pet.pet_type === "Cat"
                    ? "rgb(255, 240, 241)"
                    : pet.pet_type === "Bird"
                    ? "rgb(236, 251, 255)"
                    : pet.pet_type === "Rabbit"
                    ? "rgb(255, 245, 236)"
                    : "initial"};
                `}
              >
                {pet.pet_type}
              </div>
              {/* Checkmark icon */}
              {sitterData[pet.pet_type.toLowerCase()] &&
                (selectedPets.some(
                  (selectedPet) => selectedPet.id === pet.id
                ) ? (
                  <div
                    css={css`
                      position: absolute;
                      width: 8%;
                      aspect-ratio: 1;
                      border: solid 1px;
                      border-color: rgb(255, 112, 55);
                      top: 12px;
                      right: 12px;
                      border-radius: 3px;
                      background-color: rgb(255, 112, 55);
                    `}
                  >
                    <BsCheckLg
                      css={css`
                        color: white;
                        display: flex;
                      `}
                    ></BsCheckLg>
                  </div>
                ) : (
                  <div
                    css={css`
                      position: absolute;
                      width: 8%;
                      aspect-ratio: 1;
                      border: solid 1px;
                      border-color: #dadada;
                      top: 12px;
                      right: 12px;
                      border-radius: 3px;
                    `}
                  ></div>
                ))}
            </div>
          ))}

          <div
            css={css`
              position: relative;
              aspect-ratio: 1;
              color: rgb(255, 112, 55);
              border-radius: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: background-color 0.3s;
              background-color: rgb(255, 241, 236);
              font-size: 16px;
              font-weight: bold;
              flex-direction: column;
              gap: 10px;
            `}
            onClick={() => navigate(`/owner/${state.user.id}/yourPet`)}
          >
            <BsPlusCircle
              css={css`
                font-size: 50px;
                font-weight: bold;
              `}
            />
            Create New Pet
          </div>
        </div>
      )}
    </div>
  );
}

export default PetList;
