import RespScreenWidth from '../common/mediaConst';

const GoodDiscountInComplect = ({ content }) => (
  <>
    <div className="good-wrapper">
      <img src={content.src} srcSet={content.srcSet} className="good-img" />
      <div className="good-main-content">
        <span className="title">{content.name}</span>
        <span className="volume">
          Об'єм:
          {content.volume}л
        </span>
        <span className="volume">{content.price} грн</span>
      </div>
    </div>
    <style jsx>
      {`
        .good-wrapper {
          display: flex;
          margin-bottom: 18px;
        }
        .good-img {
          width: 120px;
          height: 120px;
        }
        .good-main-content {
          display: flex;
          flex-direction: column;
          margin-left: 19px;
          padding-top: 14px;
          letter-spacing: 0.89px;
          line-height: 20px;
        }
        .good-main-content span {
          margin-bottom: 16px;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .good-img {
            width: 100px;
            height: 110px;
          }
          .good-wrapper {
            margin-bottom: 15px;
          }
          .good-main-content {
            font-size: 14px;
          }
          .good-main-content span {
            margin-bottom: 10px;
          }
          .good-main-content {
            margin-left: 10px;
            padding-top: 6px;
          }
        }
      `}
    </style>
  </>
);
export default GoodDiscountInComplect;
