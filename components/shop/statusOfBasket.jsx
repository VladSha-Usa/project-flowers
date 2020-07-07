import BasketLogic from '../../data/shop/logic/basket';
import useRx from './useRx';
import React, { useState, useEffect } from 'react';

const StatusOfBasket = ({ addedGoodName }) => {
  const statusOfAdding = useRx(BasketLogic.statusOfAdding);
  const statusOfEmptyBasket = useRx(BasketLogic.statusOfEmptyBasket);
  const count = useRx(BasketLogic.count);
  const [emptyBasket, setEmptyBasket] = useState(false);
  useEffect(() => {
    statusOfEmptyBasket && count === 0
      ? setEmptyBasket(true)
      : setEmptyBasket(false);
  }, [statusOfEmptyBasket, count]);
  return (
    <>
      <div className="status-adding-wrapper">
        {emptyBasket ? (
          <>Ваш кошик порожній&nbsp;&nbsp;&nbsp;😩</>
        ) : statusOfAdding ? (
          <>
            <span className="added-good">{addedGoodName}</span> успішно додано
            до кошику!&nbsp;&nbsp;&nbsp;😊
          </>
        ) : null}
      </div>
      <style jsx>
        {`
          .status-adding-wrapper {
            position: absolute;
            width: ${emptyBasket ? 'auto' : '345px'};
            box-sizing: border-box;
            border-radius: 12px;
            box-shadow: 4px 8px 48px -1px rgba(8, 32, 79, 0.19);
            background-color: var(--white);
            font-family: Montserrat;
            font-size: 16px;
            font-weight: 500;
            line-height: 1.5;
            letter-spacing: 0.84px;
            color: var(--texticonscolor);
            color: var(--texticonscolor);
            left: -95px;
            top: 81px;
            padding: ${emptyBasket
              ? '28px 55px 28px 55px'
              : '18px 27px 13px 32px'};
            display: ${statusOfAdding || emptyBasket ? 'block' : 'none'};
            white-space: ${emptyBasket ? 'nowrap' : 'pre-wrap'};
          }
          .status-adding-wrapper:before {
            position: absolute;
            content: '';
            width: 0;
            height: 0;
            top: -13px;
            right: 50px;
            border-style: solid;
            border-width: 0 10px 20px 10px;
            border-color: transparent transparent #fff transparent;
            z-index: 30;
          }
          .added-good {
            color: var(--primarycolor);
          }
        `}
      </style>
    </>
  );
};

export default StatusOfBasket;
