/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/authentication";
import { useMyPetsTools } from "../../../../contexts/myPetsTools";
import {
  buttonCardStyle,
  cardDetailStyle,
  cardImgStyle,
  petNameStyle,
  sectionContentStyle,
} from "./YourPetStyle";

function SectionContentYourPet({ setIsUpdatePet }) {
  const params = useParams();
  const { getPet, allPet } = useMyPetsTools();
  const { state, checkToken } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
    getPet(params.id);
  }, []);

  return (
    <div className="section_content" css={sectionContentStyle}>
      {allPet.map((pet, index) => {
        return (
          <button
            onClick={() => {
              setIsUpdatePet(true);
              navigate(`/owner/${state.user.id}/yourPet/editPet/${pet.id}`);
            }}
            key={index}
            css={buttonCardStyle}
          >
            <div className="card">
              <img
                src={pet.picture}
                alt={
                  pet.pet_type === "bird"
                    ? "bird"
                    : pet.pet_type === "dog"
                    ? "dog"
                    : pet.pet_type === "cat"
                    ? "cat"
                    : pet.pet_type === "rabbit"
                    ? "rabbit"
                    : "transparent"
                }
                css={cardImgStyle}
              />
              <div className="card_detail" css={cardDetailStyle}>
                <h4 css={petNameStyle}>{pet.pet_name}</h4>
                <p
                  css={css`
                    border: 1px solid;
                    width: 63px;
                    height: 32px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    border-radius: 99px;

                    color: ${
                      pet.pet_type.toLowerCase() === "bird"
                        ? "rgba(118, 208, 252, 1)"
                        : pet.pet_type.toLowerCase() === "dog"
                        ? "rgba(28, 205, 131, 1)"
                        : pet.pet_type.toLowerCase() === "cat"
                        ? "rgba(250, 138, 192, 1)"
                        : pet.pet_type.toLowerCase() === "rabbit"
                        ? "rgba(255, 152, 111, 1)"
                        : "transparent" // Default to transparent if type is unknown
                    };

                    background-color: ${
                      pet.pet_type.toLowerCase() === "bird"
                        ? "rgba(236, 251, 255, 1)"
                        : pet.pet_type.toLowerCase() === "dog"
                        ? "rgba(231, 253, 244, 1)"
                        : pet.pet_type.toLowerCase() === "cat"
                        ? "rgba(255, 240, 241, 1)"
                        : pet.pet_type.toLowerCase() === "rabbit"
                        ? "rgba(255, 245, 236, 1)"
                        : "transparent" // Default to transparent if type is unknown
                    };
                  `}
                >
                  {pet.pet_type}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
export default SectionContentYourPet;
