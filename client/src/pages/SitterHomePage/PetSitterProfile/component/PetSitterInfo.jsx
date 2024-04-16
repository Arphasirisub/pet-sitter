/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  inputContainer,
  headingStyle,
  inputTradeName,
  textAraeStyle,
  titleStyle,
  addImage,
  imgGalleryContainer,
  imgStyle,
  deleteButton,
  position,
} from "../Style/PetSitterInfoStyle";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useEffect, useState } from "react";
import { useSitter } from "../../../../contexts/getSitters";
import uploadImg from "../../../../PublicPicture/uploadphoto.png";
import deleteIcon from "../../../../PublicPicture/delete.png";
import axios from "axios";

function PetSitterInfo() {
  const {
    getSitterInfo,
    setGetSitterInfo,
    getSitterData,
    tradeName,
    setTradeName,
    service,
    setService,
    myPlace,
    setMyPlace,
    petType,
    setPetType,
    imgGallery,
    setImgGallery,
  } = useSitter();
  const animationSection = makeAnimated();

  const options = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "bird", label: "Bird" },
    { value: "rabbit", label: "Rabbit" },
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the selected file from the event
    const maxFileSize = 20 * 1024 * 1024; // 10MB in bytes
    console.log(file);

    if (file && file.size > maxFileSize) {
      console.error("File size exceeds the limit (10MB)");
      return;
    }

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImg = reader.result;
        // Update getSitterInfo with the new image
        setGetSitterInfo((prevSitterInfo) => ({
          ...prevSitterInfo,
          image_gallery: [...prevSitterInfo.image_gallery, newImg],
        }));
        // Update imgGallery with the new image
        setImgGallery((prevImgGallery) => [...prevImgGallery, newImg]);
      };
      reader.readAsDataURL(file);
    }
  };

  // useEffect(() => {
  //   console.log(imgGallery);
  // }, []);

  const newImgGallery = Array.isArray(imgGallery) ? imgGallery : [];

  const handleDeleteGallery = (index) => {
    const updatedGallery = [...imgGallery]; // Create a copy of imgGallery array
    updatedGallery.splice(index, 1); // Remove one element at the specified index
    setImgGallery(updatedGallery); // Update the state with the modified array
  };

  return (
    <div css={inputContainer}>
      <p css={headingStyle}>Pet Sitter</p>
      <label htmlFor="address">Pet sitter name (Trade name)*</label>
      <input
        required
        css={inputTradeName}
        onChange={(e) => {
          setTradeName(e.target.value);
        }}
        value={tradeName}
      />
      <p>Pet type</p>
      <Select
        isMulti
        components={animationSection}
        options={options}
        value={options.filter((option) => petType[option.value])}
        onChange={(selectedOptions) => {
          const updatedPetType = {};
          options.forEach((option) => {
            updatedPetType[option.value] = selectedOptions.some(
              (selectedOption) => selectedOption.value === option.value
            );
          });
          setPetType(updatedPetType);
        }}
        theme={(theme) => ({
          ...theme,

          colors: {
            ...theme.colors,
            primary: "#eb6733",
          },
        })}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: state.isFocused ? "0.5px" : "1px solid #dcdfed ",
          }),
          multiValue: () => ({
            backgroundColor: "#fff1ec",
            padding: "5px 15px",
            borderRadius: "20px",
            color: "#E4490B",
            display: "flex",
            flexDirection: "row",
          }),
          multiValueLabel: () => ({
            color: "#E4490B",
          }),
          valueContainer: () => ({
            display: "flex",
            gap: "6px",
            justifyContent: "center",
            paddingLeft: "10px",
            height: "45px",
            alignItems: "center",
          }),
          multiValueRemove: () => ({
            padding: "2px 2px 0px 4px",
          }),
          option: () => ({
            ":hover": {
              backgroundColor: "#fff1ec",
            },
            padding: "10px",
          }),
        }}
      />
      <p>Service (Describe all of your service for pet sitting)</p>
      <textarea
        css={textAraeStyle}
        onChange={(e) => {
          setService(e.target.value);
        }}
        value={service}
      ></textarea>
      <p css={titleStyle}>My place (Describe your place)</p>
      <textarea
        css={textAraeStyle}
        onChange={(e) => {
          setMyPlace(e.target.value);
        }}
        value={myPlace}
      ></textarea>
      <p css={titleStyle}>Image Gallery (Maximum 10 images)</p>
      <div css={imgGalleryContainer}>
        {imgGallery &&
          imgGallery.map((img, index) => (
            <div key={index} css={position}>
              <img css={imgStyle} src={img} alt={`Image ${index}`} />
              <button
                css={deleteButton}
                onClick={() => {
                  handleDeleteGallery(index);
                }}
              >
                <img src={deleteIcon} alt={`Delete Image ${index}`} />
              </button>
            </div>
          ))}

        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e)}
          multiple
          style={{ display: "none" }}
          id="imageUpload"
        />
        <label
          htmlFor="imageUpload"
          hidden={newImgGallery.length <= 9 ? false : true}
        >
          <img src={uploadImg} css={addImage} alt="uploadImg" />
        </label>
      </div>
    </div>
  );
}

export default PetSitterInfo;
