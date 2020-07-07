import React from 'react';
import RespScreenWidth from '../common/mediaConst';

const TitleSection = () => (
  <>
    <div className="title__section-wrapper">
      <div className="title__section-background">
        Магазин <br /> велоспорядження
      </div>
      <div className="title__section-main">Магазин велоспорядження</div>
      <div className="title__section-subtitle">
        Велоспорядження для легких подорожей, мандруй сміливо, безпечно, а
        головне з комфортом
      </div>
    </div>
    <style jsx>
      {`
        .title__section-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title__section-main {
          font-size: 28px;
          font-family: Montserrat;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 1.31px;
          color: var(--texticonscolor);
          position: relative;
          text-transform: uppercase;
          margin-bottom: 15px;
        }
        .title__section-background {
          object-fit: contain;
          opacity: 0.12;
          font-family: Montserrat;
          font-size: 38px;
          font-weight: 900;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.05;
          letter-spacing: 1.78px;
          color: var(--transparency);
          position: absolute;
          margin-top: -19px;
          text-transform: uppercase;
        }
        .title__section-subtitle {
          font-family: Montserrat;
          font-size: 17px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.53;
          letter-spacing: 0.79px;
          text-align: center;
          color: var(--texticonscolor);
          width: 501px;
        }
        .title__section-background br {
          display: none;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .title__section-background br {
            display: block;
          }
          .title__section-wrapper .title__section-main {
            font-size: 22px;
            line-height: 32px;
            letter-apacing: 1.03px;
            text-align: center;
            margin-bottom: 16px;
          }
          .title__section-wrapper .title__section-background {
            font-size: 22px;
            line-height: 1.51;
            letter-apacing: 1.03px;
            text-align: center;
            margin-top: -9px;
          }
          .title__section-background {
            display: none;
          }
          .title__section-subtitle {
            width: 267px;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 0.65px;
          }
        }
      `}
    </style>
  </>
);

export default TitleSection;
