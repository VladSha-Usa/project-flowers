import ShopBasketAmount from './shopBasketAmount';
import BreadcrumbsNav from './breadcrumbsNav';
import RespScreenWidth from '../common/mediaConst';

const BasketStatus = ({ vm }) => (
  <>
    <div className="status-wrapper">
      <BreadcrumbsNav vm={vm.breadcrumbsNavVM} />
      <div className="added-goods">
        <span className="added-goods-text">Додані товари:</span>
        <ShopBasketAmount vm={vm.shopBasketAmountVM} />
      </div>
    </div>
    <style jsx>
      {`
        .status-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: Montserrat;
        }
        .added-goods-text {
          margin-right: 16px;
        }
        .added-goods {
          display: flex;
          align-items: center;
          font-size: 17px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.53;
          letter-spacing: 0.89px;
          color: var(--texticonscolor);
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .status-wrapper {
            flex-direction: column;
          }
          .added-goods {
            justify-content: space-between;
            width: 100%;
            margin-top: -7px;
          }
          .added-goods-text {
            margin-right: 0px;
            font-size: 16px;
            line-height: 26px;
            letter-spacing: 0.84px;
          }
        }
      `}
    </style>
  </>
);

export default BasketStatus;
