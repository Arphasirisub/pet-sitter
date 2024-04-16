/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { containerYourPetStyle } from "./YourPetStyle";
import SectionContentYourPet from "./SectionContentYourPet";
import SectionTopicYourPet from "./SectionTopicYourPet";

function YourPetTap({ setIsCreatePet, setIsUpdatePet }) {
  return (
    <div className="container_yourpet" css={containerYourPetStyle}>
      <SectionTopicYourPet setIsCreatePet={setIsCreatePet} />

      <SectionContentYourPet setIsUpdatePet={setIsUpdatePet} />
    </div>
  );
}

export default YourPetTap;
