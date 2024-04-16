/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  containerContentStyle,
  modifyContainerContentStyle,
  topicText,
} from "./ContentStyle";
import Detail from "./Detail";
import CardContent from "./Card";

function Content() {
  return (
    <div className="modify_container_content" css={modifyContainerContentStyle}>
      <div className="container_content" css={containerContentStyle}>
        <div className="section__topic">
          <h2 css={topicText}>
            "Your Pets, Our Priority: Perfect Care, Anytime, Anywhere."
          </h2>
        </div>

        <Detail />
        <CardContent />
      </div>
    </div>
  );
}

export default Content;
