/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import importbutton from "../../../../PublicPicture/importbutton.png";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import {
  textprofilebox,
  profilepicturebox,
  inputContainer,
  inputStyle,
  emailPhoneContainer,
  columnContainer,
  input,
  input2,
  fontStyle,
  buttonContainer,
  updateButton,
  yourNameTitle,
  datePickerStyle,
} from "./ProflieStyle";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import { TextField } from "@mui/material";

function EditProfileTab() {
  const [profileData, setprofileData] = useState({});
  const [nameData, setnameData] = useState("");
  const [phoneData, setphoneData] = useState("");
  const [emailData, setemailData] = useState("");
  const [pictureData, setPictureData] = useState(null);
  const [dateData, setDateData] = useState(null);

  const handleDateChange = (e) => {
    setDateData(e);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file from the event
    const maxFileSize = 2 * 1024 * 1024; // 2MB in bytes

    if (file && file.size > maxFileSize) {
      console.error("File size exceeds the limit (2MB)");
      return; // Exit the function if file size exceeds the limit
    }

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPictureData(reader.result);
        setprofileData({ ...profileData, profile_img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    await axios.put(`http://localhost:4000/owners/myProfile`, {
      full_name: nameData,
      phone: phoneData,
      email: emailData,
      profile_img: pictureData,
      birthday: dateData,
    });
  };

  const getDataProfile = async () => {
    const result = await axios.get(`http://localhost:4000/owners/myProfile`);
    setprofileData(result.data.data.data);
  };

  useEffect(() => {
    getDataProfile();
  }, []);
  useEffect(() => {
    setnameData(profileData.full_name);
    setphoneData(profileData.phone);
    setemailData(profileData.email);
    setPictureData(profileData.profile_img);
    setDateData(profileData.birthday);
  }, [profileData]);

  return (
    <form onSubmit={handleSubmit}>
      <div css={textprofilebox}>Profile</div>

      <div css={profilepicturebox}>
        <img
          src={pictureData}
          alt="petimage"
          css={css`
            width: 240px;
            height: 240px;
            border-radius: 999px;
            object-fit: cover;
          `}
        />
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e)}
          style={{ display: "none" }}
        />
        <label htmlFor="fileInput">
          <img
            src={importbutton}
            alt="importbutton"
            css={css`
              cursor: pointer;
              position: absolute;
              top: 185px;
              left: 180px;
            `}
          />
        </label>
      </div>

      <p css={yourNameTitle}>Your Name*</p>
      <div css={inputContainer}>
        <input
          css={inputStyle}
          type="text"
          value={nameData}
          onChange={(e) => {
            setnameData(e.target.value);
          }}
        />
      </div>
      <div css={emailPhoneContainer}>
        <div css={columnContainer}>
          <p css={fontStyle}>Email*</p>
          <input
            css={input}
            type="email"
            value={emailData}
            onChange={(e) => {
              setemailData(e.target.value);
            }}
          />
        </div>
        <div css={columnContainer}>
          <p css={fontStyle}>Phone*</p>
          <input
            css={input2}
            type="text"
            value={phoneData}
            onChange={(e) => {
              setphoneData(e.target.value);
            }}
          />
        </div>
      </div>
      <div css={emailPhoneContainer}>
        <div css={columnContainer}>
          <p css={fontStyle}>ID Number</p>
          <input css={input} value={profileData.id} />
        </div>
        <div css={columnContainer}>
          <p css={fontStyle}>Date ot Birth</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Date"
              value={dayjs(dateData)}
              disablePast={false}
              css={datePickerStyle}
              onChange={(e) => handleDateChange(e)}
              textField={(params) => (
                <TextField {...params} variant="standard" />
              )}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div css={buttonContainer}>
        <button type="submit" css={updateButton}>
          Update Profile
        </button>
      </div>
    </form>
  );
}
export default EditProfileTab;
