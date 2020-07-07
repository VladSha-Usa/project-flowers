import React from 'react';
import RespScreenWidth from '../common/mediaConst';

const GoodListItem = ({ src, srcSet, contentTitle, capacity, price, href }) => {
  const imgWrapper = 'item__img-wrapper';
  const title = 'item__title';
  const description = 'item__description';
  const descriptionCapacity = 'item__description-capacity';
  const descriptionPrice = 'item__description-price';
  const descriptionPriceCurrency = 'item__description-price__currency';
  const descriptionCapacityLitres = 'item__description-capacity__litres';
  const descriptionCapacityIntro = 'item__description-capacity__intro';

  return (
    <>
      <a href={href} target="_blank" className="case-field-link">
        <div className="case-field">
          <div className={imgWrapper}>
            <img
              style={{ width: '255px', height: '230px' }}
              src={src}
              srcSet={srcSet}
            />
          </div>
          <div className={title}>{contentTitle}</div>
          <div className={description}>
            <div className={descriptionCapacity}>
              <span className={descriptionCapacityIntro}>Об'єм:</span>
              {capacity}
              <span className={descriptionCapacityLitres}>л</span>
            </div>
            <div className={descriptionPrice}>
              {price.toLocaleString({ useGrouping: true })}
              <span className={descriptionPriceCurrency}>грн</span>
            </div>
          </div>
        </div>
      </a>
      <style jsx>
        {`
          .case-field {
            width: 275px;
            height: 380px;
            border-radius: 12px;
            box-shadow: 2px 2px 25px -2px rgba(12, 32, 60, 0.12);
            background-color: #fff;
            display: inline-block;
            margin-bottom: 20px;
            position: relative;
            transition: 0.2s ease-out;
            z-index: 1;
          }
          .${imgWrapper} {
            margin-top: 10px;
            margin-bottom: 15px;
            text-align: center;
          }
          * {
            font-family: Montserrat;
            font-size: 17px;
            font-stretch: normal;
            font-style: normal;
          }
          .${title} {
            font-weight: 600;
            line-height: 1.53;
            letter-spacing: 0.89px;
            text-align: center;
            color: var(--texticonscolor);
            white-space: pre-wrap;
          }
          .${description} {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: flex-end;
            position: absolute;
            bottom: 25px;
          }
          .${descriptionCapacity} {
            font-weight: 600;
            font-style: normal;
            line-height: 1.53;
            letter-spacing: 0.89px;
            color: var(--texticonscolor);
            margin-left: 25px;
          }
          .${descriptionCapacityIntro} {
            font-weight: 500;
            margin-right: 5px;
          }
          .${descriptionPrice} {
            font-weight: 600;
            line-height: 1.65;
            letter-spacing: 0.79px;
            text-align: center;
            color: var(--primarycolor);
            margin-right: 25px;
          }
          .${descriptionPriceCurrency} {
            margin-left: 10px;
          }
          @media only screen and (min-width: ${RespScreenWidth.screenWidthMobile}px) {
            .case-field:hover {
              animation-delay: 2s;
              transform: matrix(1.24, 0, 0, 1.16, 0, -22);
              box-shadow: 2px 2px 5px 2px rgba(12, 32, 60, 0.2);
              background-color: #fff;
              z-index: 5;
              cursor: pointer;
            }
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .case-field {
              margin-bottom: 31px;
            }
          }
        `}
      </style>
    </>
  );
};

export default GoodListItem;
