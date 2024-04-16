/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import importbutton from "../../../../PublicPicture/importbutton.png";
import { useMyPetsTools } from "../../../../contexts/myPetsTools.jsx";
import {
  importButtonStyle,
  pictureByIdStyle,
  sectionImportImgStyle,
} from "./UpdatePetStyle.jsx";
import { useEffect, useState } from "react";

function SectionImportImgUpdatePage() {
  const { postById, setPostById } = useMyPetsTools();
  console.log(postById);

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
        setPostById({ ...postById, picture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {}, [postById]);
  return (
    <div className="section_importimg" css={sectionImportImgStyle}>
      <img src={postById.picture} alt="petimage" css={pictureByIdStyle} />
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={(e) => handleFileChange(e)}
        style={{ display: "none" }}
      />
      <label htmlFor="fileInput">
        <img src={importbutton} alt="importbutton" css={importButtonStyle} />
      </label>
    </div>
  );
}

export default SectionImportImgUpdatePage;
