/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import importButton from "../../../../PublicPicture/importbutton.png";
import { useSitter } from "../../../../contexts/getSitters.jsx";
import { useEffect, useState } from "react";
import {
  basicInfoContainer,
  headingLayout,
  headingStyle,
  profileImg,
  imgContainer,
  importButtonStyle,
  inputContainer,
  inputLayout,
  input,
  dropdownInput,
  introductionTextarea,
  introductionTitle,
  Root,
  buttonIsActiveLayout,
  showProfileStyle,
  fontStyle,
} from "../Style/BasicInfoStyle.jsx";
import { Switch } from "@mui/base/Switch";

function BasicInfo() {
  const label = { slotProps: { input: { "aria-label": "Demo switch" } } };
  const {
    getSitterInfo,
    setGetSitterInfo,
    getSitterData,
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    introduction,
    setIntroduction,
    experience,
    setExperience,
    setUpdateImg,
    isActive,
    setIsActive,
  } = useSitter();
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    getSitterData();
  }, []);

  // useEffect(() => {
  //   // console.log(getSitterInfo);
  //   setName(getSitterInfo.full_name);
  //   setEmail(getSitterInfo.email);
  //   setIntroduction(getSitterInfo.introduction);
  //   setPhone(getSitterInfo.phone);
  //   setExperience(getSitterInfo.experience);
  //   setUpdateImg(getSitterInfo.profile_img);
  //   setIsActive(getSitterInfo.is_active);
  // }, [getSitterInfo]);

  // useEffect(() => {
  //   // console.log(experience);
  // }, [experience]);

  const handleIsActiveChange = (event) => {
    const newValue = event.target.checked; // Get the new value
    setIsActive(newValue); // Update isActive state

    // Update getSitterInfo with new isActive value
    setGetSitterInfo((prevSitterInfo) => ({
      ...prevSitterInfo,
      is_active: newValue,
    }));
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);

    if (newName.length < 6 || newName.length > 20) {
      setNameError("Full name must be between 6 and 20 characters");
    } else {
      setNameError("");
    }
  };

  const handleFileUpdate = (e) => {
    const file = e.target.files[0]; // Get the selected file from the event
    const maxFileSize = 2 * 1024 * 1024; // 2MB in bytes
    console.log(file);
    if (file && file.size > maxFileSize) {
      console.error("File size exceeds the limit (2MB)");
      return; // Exit the function if file size exceeds the limit
    }

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdateImg(reader.result);
        setGetSitterInfo({ ...getSitterData, profile_img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  // useEffect(() => {
  //   // console.log(updateImg);
  // }, [getSitterInfo]);

  return (
    <>
      <div css={basicInfoContainer}>
        <div css={headingLayout}>
          <p css={headingStyle}>Basic Information</p>
          <div css={buttonIsActiveLayout}>
            <Switch
              slots={{
                root: Root,
              }}
              {...label}
              checked={isActive}
              onChange={handleIsActiveChange} // Use onChange instead of onClick for toggling
            />
            <div>
              <p css={showProfileStyle}> Show Profile</p>
              <p css={fontStyle}>(on Pet Owner Searching)</p>
            </div>
          </div>
        </div>

        <p>Profile Image</p>
        <div css={imgContainer}>
          <img
            css={profileImg}
            src={getSitterInfo.profile_img}
            alt="user-proflie"
          />
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpdate(e)}
            style={{ display: "none" }}
          />
          <label htmlFor="fileInput">
            <img
              css={importButtonStyle}
              src={importButton}
              alt="import-button"
            />
          </label>
        </div>
        <div css={inputContainer}>
          <div css={inputLayout}>
            <label htmlFor="fullName">Your full name*</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={name}
              css={input}
              required
              onChange={handleNameChange}
            />
            {nameError && (
              <span
                css={css`
                  color: red;
                `}
              >
                {nameError}
              </span>
            )}
          </div>
          <div css={inputLayout}>
            <label htmlFor="experience">Experience* </label>
            <select
              css={dropdownInput}
              id="experience"
              name="experience"
              value={experience}
              onChange={(e) => {
                setExperience(e.target.value);
              }}
            >
              <option value="0">0 Years</option>
              <option value="0.5">0.5 Years</option>
              <option value="1">1 Years</option>
              <option value="1.5">1.5 Years</option>
              <option value="2">2 Years</option>
              <option value="2.5">2.5 Years</option>
              <option value="3">3 Years</option>
              <option value="3.5">3.5 Years</option>
              <option value="4">4 Years</option>
              <option value="4">4.5 Years</option>
              <option value="5">5 Years</option>
              <option value="5.5">5.5 Years</option>
              <option value="6">6 Years</option>
              <option value="6.5">6.5 Years</option>
              <option value="7">7 Years</option>
              <option value="7.5">7.5 Years</option>
              <option value="8">8 Years</option>
              <option value="8.5">8.5 Years</option>
              <option value="9">9+ Years</option>
            </select>
          </div>
        </div>
        <div css={inputContainer}>
          <div css={inputLayout}>
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0]{1}[0-9]{2}[0-9]{3}[0-9]{4}"
              css={input}
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phone}
            />
          </div>
          <div css={inputLayout}>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
              css={input}
              disabled
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
        </div>
        <div css={introductionTitle}>
          <label htmlFor="introduction">
            Introduction (Describe about yourself as a pet sitter)
          </label>
          <textarea
            id="introduction"
            name="introduction"
            css={introductionTextarea}
            onChange={(e) => {
              setIntroduction(e.target.value);
            }}
            value={introduction}
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default BasicInfo;
