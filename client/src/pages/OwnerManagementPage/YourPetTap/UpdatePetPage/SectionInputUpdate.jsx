/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useMyPetsTools } from "../../../../contexts/myPetsTools.jsx";
import Button from "@mui/material/Button";
import { RiDeleteBinLine } from "react-icons/ri";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  formStyle,
  labelStyle,
  inputButtonStyle,
  inputTopStyle,
  textAreaStyle,
  deleteButtonStyle,
  textDeleteButtonStyle,
  deleteConfirmStyle,
  deleteDetailStyle,
  buttonGroupStyle,
  cancleButtonStyle,
  deleteButtonPopupStyle,
  buttonGroupUpdateStyle,
  cancleUpdeteButtonStyle,
  updateButtonStyle,
  inputCenterStyle,
  selectCenterStyle,
  inputNoButtomStyle,
  inputStyle,
  sectionDeleteButton,
  centerInRightStyle,
  centerInLeftStyle,
  optionInputDataNone,
} from "./UpdatePetStyle.jsx";

function SectionInputUpdatePage() {
  const {
    inputData,
    handleStateChange,
    setInputData,
    postById,
    deletePetById,
    getPetById,
    resetToPostData,
    updateImageSrc,
  } = useMyPetsTools();

  const params = useParams();
  const [open, setOpen] = React.useState(false);
  const [warningOpen, setWarningOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    try {
      await axios.put(`http://localhost:4000/pets/${params.petId}`, {
        ...inputData,
        picture: postById.picture,
      });
    } catch (error) {
      console.error("Error updating pet:", error.message);
    }
  };

  useEffect(() => {
    getPetById(params.petId);
    return () => {
      // Reset inputData state
      setInputData({
        pet_name: "",
        pet_type: "",
        breed: "",
        sex: "",
        age: "",
        color: "",
        weight: "",
        about: "",
      });
    };
  }, []);
  useEffect(() => {
    if (postById) {
      setInputData({
        pet_name: postById.pet_name || "",
        pet_type: postById.pet_type || "",
        breed: postById.breed || "",
        sex: postById.sex || "",
        age: postById.age || "",
        color: postById.color || "",
        weight: postById.weight || "",
        about: postById.about || "",
      });
    }
  }, [postById]);

  return (
    <div className="section_inputdetail">
      <form onSubmit={handleSubmit} action="petdeail" css={formStyle}>
        <div className="input_top">
          <label htmlFor="petname" css={labelStyle}>
            Pet Name*
          </label>
          <input
            id="username"
            type="text"
            css={inputTopStyle}
            placeholder=""
            value={inputData.pet_name}
            onChange={(e) => {
              handleStateChange("pet_name", e.target.value);
            }}
          />
        </div>
        <div className="input_center" css={inputCenterStyle}>
          <div className="center_left" css={centerInLeftStyle}>
            <label htmlFor="pettype" css={labelStyle}>
              Pet Type*
            </label>
            <select
              id="pettype"
              name="pettype"
              css={selectCenterStyle}
              value={inputData.pet_type}
              onChange={(e) => {
                handleStateChange("pet_type", e.target.value);
              }}
            >
              {postById.pet_type && (
                <option value={postById.pet_type} css={optionInputDataNone}>
                  {postById.pet_type}
                </option>
              )}
              <option disabled value="">
                Select your pet type
              </option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              <option value="Rabbit">Rabbit</option>
            </select>

            <label htmlFor="sex" css={labelStyle}>
              Sex*
            </label>
            <select
              id="sex"
              name="sex"
              css={selectCenterStyle}
              value={inputData.sex}
              onChange={(e) => {
                handleStateChange("sex", e.target.value);
              }}
            >
              {postById.sex && (
                <option value={postById.sex} css={optionInputDataNone}>
                  {postById.sex}
                </option>
              )}
              <option disabled value="">
                Select sex of your pet
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <label htmlFor="username" css={labelStyle}>
              Color*
            </label>
            <input
              id="color"
              type="text"
              css={inputNoButtomStyle}
              placeholder="Describe color of your pet"
              value={inputData.color}
              onChange={(e) => {
                handleStateChange("color", e.target.value);
              }}
            />
          </div>

          <div className="center_right" css={centerInRightStyle}>
            <label htmlFor="breed" css={labelStyle}>
              Breed*
            </label>
            <input
              id="breed"
              type="text"
              css={inputStyle}
              placeholder="Breed of your pet"
              value={inputData.breed}
              onChange={(e) => {
                handleStateChange("breed", e.target.value);
              }}
            />
            <label htmlFor="age" css={labelStyle}>
              Age (Month)*
            </label>
            <input
              id="age"
              type="text"
              css={inputStyle}
              placeholder="Age of your pet"
              value={inputData.age}
              onChange={(e) => {
                handleStateChange("age", e.target.value);
              }}
            />
            <label htmlFor="weight" css={labelStyle}>
              Weight (Kilogram)*
            </label>
            <input
              id="weight"
              type="text"
              css={inputNoButtomStyle}
              placeholder="Weight of your pet"
              value={inputData.weight}
              onChange={(e) => {
                handleStateChange("weight", e.target.value);
              }}
            />
          </div>
        </div>

        <div className="input_button" css={inputButtonStyle}>
          <label htmlFor="about" css={labelStyle}>
            About
          </label>
          <textarea
            id="about"
            type="text"
            css={textAreaStyle}
            placeholder="Describe color of your pet..."
            value={inputData.about}
            onChange={(e) => {
              handleStateChange("about", e.target.value);
            }}
          />
        </div>

        <div className="section_deletebutton" css={sectionDeleteButton}>
          <Button
            onClick={handleOpen}
            css={css`
              padding: 0;
              color: rgba(0, 0, 0, 0.4);
            `}
          >
            <RiDeleteBinLine css={deleteButtonStyle} />
            <p css={textDeleteButtonStyle}>Delete Pet</p>
          </Button>
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
              }}
            >
              <h2 css={deleteConfirmStyle}>Delete Confirmation</h2>
              <p css={deleteDetailStyle}>Are you sure to delete this pet?</p>
              <div className="buttongroup" css={buttonGroupStyle}>
                <Button css={cancleButtonStyle} onClick={handleClose}>
                  Cancle
                </Button>
                <Button
                  css={deleteButtonPopupStyle}
                  onClick={() => deletePetById(params.petId)}
                >
                  Delete
                </Button>
              </div>
            </Box>
          </Modal>
        </div>

        <div className="buttongroup_update" css={buttonGroupUpdateStyle}>
          <button css={cancleUpdeteButtonStyle} onClick={resetToPostData}>
            Cancel
          </button>
          <Button
            type="submit"
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            css={updateButtonStyle}
          >
            Update Pet
          </Button>
        </div>
      </form>
    </div>
  );
}
export default SectionInputUpdatePage;
