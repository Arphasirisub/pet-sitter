/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { containerUpdatePetStyle } from "./UpdatePetStyle.jsx";
import SectionInputUpdatePage from "./SectionInputUpdate.jsx";
import SectionImportImgUpdatePage from "./SectionImportImgUpdate.jsx";
import SectionTopicUpdatePage from "./SectionTopicUpdate.jsx";

function UpdatePetPage({ setIsUpdatePet }) {
  return (
    <div className="container_updatepet" css={containerUpdatePetStyle}>
      <SectionTopicUpdatePage setIsUpdatePet={setIsUpdatePet} />

      <SectionImportImgUpdatePage />

      <SectionInputUpdatePage />
    </div>
  );
}
export default UpdatePetPage;
