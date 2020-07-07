import React from 'react';
import useRx from './useRx';

const ShopBasketAmount = ({ vm }) => {
  const countValue = useRx(vm.count);
  const displayAmount = countValue <= 0 ? 'none' : 'flex';
  return (
    <>
      <div className="added-goods-amount">
        <img src="/img/shop-icon.svg" className="added-goods-amount-img" />
        <span className="added-goods-amount-num">{countValue}</span>
      </div>
      <style jsx>
        {`
          .added-goods-amount {
            width: 50px;
            height: 50px;
            box-shadow: 0 8px 12px 0 rgba(9, 21, 85, 0.12);
            background-color: var(--white);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .added-goods-amount-img {
            position: relative;
          }
          .added-goods-amount-num {
            position: absolute;
            display: ${displayAmount};
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            margin-top: -13px;
            margin-left: 21px;
            border-radius: 50%;
            background-color: var(--primarycolor);
            font-size: 14px;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 0.65px;
            color: #fff;
          }
        `}
      </style>
    </>
  );
};
export default ShopBasketAmount;
