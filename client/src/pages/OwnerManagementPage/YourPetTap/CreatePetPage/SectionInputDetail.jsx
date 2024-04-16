/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import { IoClose } from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";
import axios from "axios";
import { useMyPetsTools } from "../../../../contexts/myPetsTools.jsx";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../../../contexts/authentication.jsx";
import * as React from "react";
import {
  centerRightStyle,
  centerLeftStyle,
  fromStyle,
  inputTopStyle,
  labelStyle,
  inputButtomStyle,
  textAreaStyle,
  buttonInputStyle,
  cancleButtonStyle,
  createPetInputButtonStyle,
  inputCenterStyle,
  selectCenterStyle,
  inputStyle,
  inputNoButtomStyle,
  popUpWarningTopStyle,
  createPetFailedStyle,
  closeButtomStyle,
  popUpWarningButtomStyle,
  warningIconStyle,
  textWarningStyle,
  inputErrorStyle,
  warningIconPetNameStyle,
  warningIconInputStyle,
  containerInputTopStyle,
  warningIconInputPetTypeStyle,
  warningIconInputSexStyle,
  warningIconInputColorStyle,
  warningIconInputBreedStyle,
  warningIconInputAgeStyle,
  warningIconInputWeightStyle,
  optionSelectInput,
} from "./CreatePetStyle.jsx";

function SectionInputDetail() {
  const { handleCancel, inputData, handleStateChange, imageSrc } =
    useMyPetsTools();
  const params = useParams();
  const { checkToken } = useAuth();
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  useEffect(() => {
    checkToken();
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    try {
      setFormSubmitted(true);

      if (
        !inputData.pet_name ||
        !inputData.pet_type ||
        !inputData.sex ||
        !inputData.color ||
        !inputData.breed ||
        !inputData.age ||
        !inputData.weight ||
        !imageSrc
      ) {
        event.preventDefault();
        setOpen(true);
        console.log("Missing required fields");
        return;
      }
      await axios.post(`http://localhost:4000/pets/${params.id}`, {
        ...inputData,
        picture: imageSrc,
      });

      // navigate(`/owner/${state.user.id}/yourPet/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="section_inputdetail">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "400px",
            height: "208px",
            background: "white",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <div className="popupwarning_top" css={popUpWarningTopStyle}>
            <h2 css={createPetFailedStyle}>Create Pet Failed</h2>
            <button
              onClick={handleClose}
              css={css`
                cursor: pointer;
              `}
            >
              <IoClose css={closeButtomStyle} />
            </button>
          </div>

          <div className="popupwarning_bottom" css={popUpWarningButtomStyle}>
            <RiErrorWarningFill css={warningIconStyle} />
            <h3 css={textWarningStyle}>
              Can't create. Please provide all required information.
            </h3>
          </div>
        </Box>
      </Modal>

      <form onSubmit={handleSubmit} action="petdeail" css={fromStyle}>
        <div className="input_top" css={containerInputTopStyle}>
          <label htmlFor="petname" css={labelStyle}>
            Pet Name*
          </label>
          <input
            id="username"
            type="text"
            css={[
              inputTopStyle,
              formSubmitted && !inputData.pet_name && inputErrorStyle,
            ]}
            placeholder="Name of your pet"
            value={inputData.pet_name}
            onChange={(e) => {
              handleStateChange("pet_name", e.target.value);
            }}
          />
          {formSubmitted && !inputData.pet_name && (
            <RiErrorWarningFill
              css={[warningIconInputStyle, warningIconPetNameStyle]}
            />
          )}
        </div>
        <div className="input_center" css={inputCenterStyle}>
          <div className="center_left" css={centerLeftStyle}>
            <label htmlFor="pettype" css={labelStyle}>
              Pet Type*
            </label>
            <select
              id="pettype"
              name="pettype"
              css={[
                selectCenterStyle,
                formSubmitted && !inputData.sex && inputErrorStyle,
              ]}
              value={inputData.pet_type}
              defaultValue={"Select your pet type"}
              onChange={(e) => {
                handleStateChange("pet_type", e.target.value);
              }}
            >
              <option disabled value="" css={optionSelectInput}>
                Select your pet type
              </option>
              <option
                value="Dog"
                css={css`
                  color: black;
                `}
              >
                Dog
              </option>
              <option
                value="Cat"
                css={css`
                  color: black;
                `}
              >
                Cat
              </option>
              <option
                value="Bird"
                css={css`
                  color: black;
                `}
              >
                Bird
              </option>
              <option
                value="Rabbit"
                css={css`
                  color: black;
                `}
              >
                Rabbit
              </option>
            </select>

            {formSubmitted && !inputData.pet_type && (
              <RiErrorWarningFill
                css={[warningIconInputStyle, warningIconInputPetTypeStyle]}
              />
            )}

            <label htmlFor="sex" css={labelStyle}>
              Sex*
            </label>
            <select
              id="sex"
              name="sex"
              css={[
                selectCenterStyle,
                formSubmitted && !inputData.sex && inputErrorStyle,
              ]}
              value={inputData.sex}
              onChange={(e) => {
                handleStateChange("sex", e.target.value);
              }}
            >
              <option disabled value="" css={optionSelectInput}>
                Select sex of your pet
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {formSubmitted && !inputData.sex && (
              <RiErrorWarningFill
                css={[warningIconInputStyle, warningIconInputSexStyle]}
              />
            )}

            <label htmlFor="username" css={labelStyle}>
              Color*
            </label>
            <input
              id="color"
              type="text"
              css={[
                inputNoButtomStyle,
                formSubmitted && !inputData.color && inputErrorStyle,
              ]}
              placeholder="Describe color of your pet"
              value={inputData.color}
              onChange={(e) => {
                handleStateChange("color", e.target.value);
              }}
            />
            {formSubmitted && !inputData.color && (
              <RiErrorWarningFill
                css={[warningIconInputStyle, warningIconInputColorStyle]}
              />
            )}
          </div>

          <div className="center_right" css={centerRightStyle}>
            <label htmlFor="breed" css={labelStyle}>
              Breed*
            </label>
            <input
              id="breed"
              type="text"
              css={[
                inputStyle,
                formSubmitted && !inputData.breed && inputErrorStyle,
              ]}
              placeholder="Breed of your pet"
              value={inputData.breed}
              onChange={(e) => {
                handleStateChange("breed", e.target.value);
              }}
            />
            {formSubmitted && !inputData.breed && (
              <RiErrorWarningFill
                css={[warningIconInputStyle, warningIconInputBreedStyle]}
              />
            )}

            <label htmlFor="age" css={labelStyle}>
              Age (Month)*
            </label>
            <input
              id="age"
              type="text"
              css={[
                inputStyle,
                formSubmitted && !inputData.age && inputErrorStyle,
              ]}
              placeholder="Age of your pet"
              value={inputData.age}
              onChange={(e) => {
                handleStateChange("age", e.target.value);
              }}
            />
            {formSubmitted && !inputData.age && (
              <RiErrorWarningFill
                css={[warningIconInputStyle, warningIconInputAgeStyle]}
              />
            )}

            <label
              htmlFor="weight"
              css={css`
                ${labelStyle};
                margin-bottom: 0;
              `}
            >
              Weight (Kilogram)*
            </label>
            <input
              id="weight"
              type="text"
              css={[
                inputNoButtomStyle,
                formSubmitted && !inputData.weight && inputErrorStyle,
              ]}
              placeholder="Weight of your pet"
              value={inputData.weight}
              onChange={(e) => {
                handleStateChange("weight", e.target.value);
              }}
            />
            {formSubmitted && !inputData.weight && (
              <RiErrorWarningFill
                css={[warningIconInputStyle, warningIconInputWeightStyle]}
              />
            )}
          </div>
        </div>

        <div className="input_buttom" css={inputButtomStyle}>
          <label htmlFor="about" css={labelStyle}>
            About
          </label>
          <textarea
            id="color"
            type="text"
            css={textAreaStyle}
            placeholder="Describe color of your pet..."
            value={inputData.about}
            onChange={(e) => {
              handleStateChange("about", e.target.value);
            }}
          />
        </div>
        <div className="buttoninput" css={buttonInputStyle}>
          <button css={cancleButtonStyle} onClick={handleCancel}>
            Cancel
          </button>
          <Button
            type="submit"
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            // onClick={handleButtonClick}
            css={createPetInputButtonStyle}
          >
            Create Pet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SectionInputDetail;
