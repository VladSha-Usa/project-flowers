import React from 'react';
import ShopBasketAmount from './shopBasketAmount';
import RespScreenWidth from '../common/mediaConst';

import ShopBasketAmountVM from '../../data/viewModels/basket/ShopBasketAmountVM';

const ShopStatus = () => (
  <>
    <div className="status-wrapper">
      <div className="status-showed">
        <span className="showed-text">Показано:</span>
        <span className="showed-amount">
          8<span className="showed-amount-text">товарів</span>
        </span>
      </div>
      <div className="status-added">
        <span className="added-text">Додані:</span>
        <ShopBasketAmount vm={ShopBasketAmountVM()} />
      </div>
    </div>
    <style jsx>
      {`
        .status-wrapper {
          display: flex;
          justify-content: space-between;
          font-size: 17px;
          font-family: Montserrat;
          font-weight: 600;
          color: #040f2a;
          height: 60px;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.53;
          letter-spacing: 0.89px;
        }
        .status-showed {
          display: flex;
          align-items: center;
        }
        .status-added {
          display: flex;
          align-items: center;
        }
        .showed-text {
          margin-right: 5px;
        }
        .showed-amount-text {
          margin-left: 5px;
        }
        .added-text {
          margin-right: 8px;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .status-wrapper {
            box-shadow: none;
          }
          .added-text {
            display: none;
          }
          .status-showed {
            margin: 0;
          }
          .status-added {
            margin: -3px 0 0 0;
          }
        }
      `}
    </style>
  </>
);

export default ShopStatus;
