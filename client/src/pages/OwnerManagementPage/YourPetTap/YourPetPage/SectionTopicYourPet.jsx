/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/authentication";
import {
  createPetButtonTopicStyle,
  sectionTopicStyle,
  topicTextStyle,
} from "./YourPetStyle";

function SectionTopicYourPet({ setIsCreatePet }) {
  const { state, checkToken } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
  }, []);
  return (
    <div className="section_topic" css={sectionTopicStyle}>
      <h3 css={topicTextStyle}>Your Pet</h3>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        onClick={() => {
          setIsCreatePet(true);
          navigate(`/owner/${state.user.id}/yourPet/createPet`);
        }}
        css={createPetButtonTopicStyle}
      >
        Create Pet
      </Button>
    </div>
  );
}
export default SectionTopicYourPet;
