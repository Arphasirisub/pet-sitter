/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { cardContentText, cardStyle, sectionCardStyle } from "./ContentStyle";
import womenandcat from "../../../../PublicPicture/womenandcat.png";
import catanddog from "../../../../PublicPicture/catanddog.png";
import womenanddog from "../../../../PublicPicture/womenanddog.png";

function CardContent() {
  return (
    <div className="section__card" css={sectionCardStyle}>
      <div className="card" css={cardStyle}>
        <div className="card_image">
          <img src={womenandcat} alt="womenandcat" />
        </div>
        <div className="card_des">
          <h3 css={cardContentText}>Connect With Sitters</h3>
          <p>
            Find a verified and reviewed sitter who’ll keep your pets company
            and give time.
          </p>
        </div>
      </div>

      <div className="card" css={cardStyle}>
        <div className="card_image">
          <img src={catanddog} alt="catanddog" />
        </div>
        <div className="card_des">
          <h3 css={cardContentText}>Better For Your Pets</h3>
          <p>
            Pets stay happy at home with a sitter who gives them loving care and
            companionship.
          </p>
        </div>
      </div>

      <div className="card" css={cardStyle}>
        <div className="card_image">
          <img src={womenanddog} alt="womenanddog" />
        </div>
        <div className="card_des">
          <h3 css={cardContentText}>Calling All Pets</h3>
          <p>
            Stay for free with adorable animals in unique homes around the
            world.
          </p>
        </div>
      </div>
    </div>
  );
}
export default CardContent;
