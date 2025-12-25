import React from "react";
import { BannerWrapper } from "./Banner.styled";
import BannerImg from '../../../components/icons/src/lampochka.png';

function Banner() {
    return (
      
    <BannerWrapper>
      <div className="banner__content">
        <h2>Скидка 15% <br />
            на все подвесные <br />
            светильники <br />
            <span className="highlight-text">до 5 февраля</span>
        </h2>
      </div>

      <div className="banner__image">
        <img src={BannerImg} alt="Banner" />
      </div>
    </BannerWrapper>
  );
}

export default Banner;
