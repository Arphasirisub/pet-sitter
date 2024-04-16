/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoIosArrowBack } from "react-icons/io";
import { useMyPetsTools } from "../../../../contexts/myPetsTools.jsx";
import {
  sectionTopicStyle,
  topicButtonStyle,
  topicTextStyle,
} from "./CreatePetStyle";

function SectionTopic({ setIsCreatePet }) {
  const { setInputData } = useMyPetsTools();
  const handleReset = () => {
    setIsCreatePet(false);
    setInputData({
      pet_name: "",
      pet_type: "",
      breed: "",
      sex: "",
      age: "",
      color: "",
      weight: "",
    });
  };

  return (
    <div className="section_topic" css={sectionTopicStyle}>
      <div
        className="topic_button"
        onClick={handleReset}
        css={topicButtonStyle}
      >
        <IoIosArrowBack />
        <h3 css={topicTextStyle}>Your Pet</h3>
      </div>
    </div>
  );
}

export default SectionTopic;
