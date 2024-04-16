/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BargroupCheckbox from "./Checkbox.jsx";
import { useSitter } from "../../../../contexts/getSitters.jsx";
import {
  sectionLogoStyle,
  logoScale,
  sectionBarGroupStyle,
  containerHeaderStyle,
  catFootStyle,
  pieceCircleStyle,
  messageImgStyle,
  catCircleStyle,
  largeOrangeStarStyle,
  dogCircleStyle,
  grayCirclrStyle,
  halfGreenCircleStyle,
  modifyContainerHeaderStyle,
} from "./HeaderStyle.jsx";
import dogcircle from "../../../../PublicPicture/dogcircle.png";
import graycircle from "../../../../PublicPicture/graycircle.png";
import largeorangestar from "../../../../PublicPicture/largeorangestar.png";
import halfgreencircle from "../../../../PublicPicture/halfgreencircle.png";
import catfoot from "../../../../PublicPicture/catfoot.png";
import messageimg from "../../../../PublicPicture/messageimg.png";
import catcircle from "../../../../PublicPicture/catcircle.png";
import piececircle from "../../../../PublicPicture/piececircle.png";
import RatingDropdown from "./Rating.jsx";
import LogoGruopDetail from "./LogogroupDetail.jsx";

function Header() {
  const { getSitters } = useSitter();

  const handleSubmit = async () => {
    getSitters();
  };
  return (
    <div className="modify_container_header" css={modifyContainerHeaderStyle}>
      <div className="container_header" css={containerHeaderStyle}>
        <div className="section__logogroup" css={sectionLogoStyle}>
          <div className="logogroup_left" css={logoScale}>
            <img css={catFootStyle} src={catfoot} alt="catfoot" />
            <img css={pieceCircleStyle} src={piececircle} alt="pricecircle" />
            <img css={messageImgStyle} src={messageimg} alt="messageimg" />
            <img css={catCircleStyle} src={catcircle} alt="catcircle" />
          </div>

          <LogoGruopDetail />

          <div className="logogroup_right" css={logoScale}>
            <img
              css={largeOrangeStarStyle}
              src={largeorangestar}
              alt="largeoranhestar"
            />
            <img css={dogCircleStyle} src={dogcircle} alt="dogcircle" />
            <img css={grayCirclrStyle} src={graycircle} alt="graycircle" />
            <img
              css={halfGreenCircleStyle}
              src={halfgreencircle}
              alt="halfgreencircle"
            />
          </div>
        </div>

        <div className="section__bargroup" css={sectionBarGroupStyle}>
          <BargroupCheckbox />
          <RatingDropdown />
        </div>
      </div>
    </div>
  );
}
export default Header;
