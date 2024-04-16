/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  allStarSize,
  detailDescriptionStyle,
  detailStyle,
  headerContentText,
} from "./ContentStyle";
import largecat from "../../../../PublicPicture/large-cat.png";
import bluestar from "../../../../PublicPicture/bluestar.png";
import pinkstar from "../../../../PublicPicture/pinkstar.png";
import greenstar from "../../../../PublicPicture/greenstar.png";
import yellowstar from "../../../../PublicPicture/yellowstar.png";

function Detail() {
  return (
    <div className="section__detail" css={detailStyle}>
      <div className="detail_des" css={detailDescriptionStyle}>
        <h3 css={headerContentText}>
          {" "}
          <img src={bluestar} alt="bluestar" css={allStarSize} /> Boarding
        </h3>
        <p>
          Your pets stay overnight in your sitter’s home. They’ll be treated
          like part of the family in a comfortable environment.
        </p>

        <h3 css={headerContentText}>
          {" "}
          <img src={pinkstar} alt="pinkstar" css={allStarSize} /> House Sitting
        </h3>
        <p>
          Your sitter takes care of your pets and your home. Your pets will get
          all the attention they need without leaving home.
        </p>

        <h3 css={headerContentText}>
          {" "}
          <img src={greenstar} alt="greenstar" css={allStarSize} /> Dog Walking
        </h3>
        <p>
          Your dog gets a walk around your neighborhood. Perfect for busy days
          and dogs with extra energy to burn.
        </p>

        <h3 css={headerContentText}>
          {" "}
          <img src={yellowstar} alt="yellowstar" css={allStarSize} /> Drop-In
          Visits
        </h3>
        <p>
          Your sitter drops by your home to play with your pets, offer food, and
          give potty breaks or clean the litter box.
        </p>
      </div>
      <div className="detail_image">
        <img src={largecat} alt="largecat" />
      </div>
    </div>
  );
}
export default Detail;
