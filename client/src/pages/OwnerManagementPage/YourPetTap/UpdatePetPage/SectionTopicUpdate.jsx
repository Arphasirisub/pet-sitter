/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoIosArrowBack } from "react-icons/io";
import { useAuth } from "../../../../contexts/authentication.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMyPetsTools } from "../../../../contexts/myPetsTools.jsx";
import {
  sectionTopicStyle,
  topicButtonStyle,
  topicTextStyle,
} from "./UpdatePetStyle.jsx";

function SectionTopicUpdatePage({ setIsUpdatePet }) {
  const navigate = useNavigate();
  const { state, checkToken } = useAuth();
  useEffect(() => {
    checkToken();
  }, []);
  return (
    <div
      className="section_topic"
      css={sectionTopicStyle}
      onClick={() => {
        navigate(`/owner/${state.user.id}/yourPet`);
      }}
    >
      <div
        className="topic_button"
        onClick={() => {
          setIsUpdatePet(false);
        }}
        css={topicButtonStyle}
      >
        <IoIosArrowBack />
        <h3 css={topicTextStyle}>Your Pet</h3>
      </div>
    </div>
  );
}

export default SectionTopicUpdatePage;
