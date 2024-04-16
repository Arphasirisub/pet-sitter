/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { containerCreatePetStyle } from "./CreatePetStyle";
import SectionInputDetail from "./SectionInputDetail";
import SectionImportImg from "./SectionImportImg";
import SectionTopic from "./SectionTopic";

function CreatePetPage({ setIsCreatePet }) {
  return (
    <div className="container_createpet" css={containerCreatePetStyle}>
      <SectionTopic setIsCreatePet={setIsCreatePet} />

      <SectionImportImg />

      <SectionInputDetail />
    </div>
  );
}
export default CreatePetPage;
