/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import imgimport from "../../../../PublicPicture/imgimport.png";
import importbutton from "../../../../PublicPicture/importbutton.png";
import {
  imgImportStyle,
  importButtonImgStyle,
  sectionImportIngStyle,
} from "./CreatePetStyle";
import { useEffect, useState } from "react";
import { useMyPetsTools } from "../../../../contexts/myPetsTools.jsx";

function SectionImportImg() {
  const { imageSrc, setImageSrc, handleFileChange } = useMyPetsTools();

  useEffect(() => {}, [imageSrc]);

  return (
    <div className="section_importimg" css={sectionImportIngStyle}>
      <img src={imageSrc} alt="imgimport" css={imgImportStyle} />
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={(e) => handleFileChange(e)}
        style={{ display: "none" }}
      />
      <label htmlFor="fileInput">
        <img src={importbutton} alt="importbutton" css={importButtonImgStyle} />
      </label>
    </div>
  );
}

export default SectionImportImg;
