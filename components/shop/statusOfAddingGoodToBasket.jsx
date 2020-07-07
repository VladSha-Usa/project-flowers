import React, { useState, useEffect } from 'react';
import useRx from './useRx';
import RespScreenWidth from '../common/mediaConst';

const StatusOfAddingGoodToBasket = ({ vm }) => {
  const statusOfAdding = useRx(vm.statusOfAdding);
  const statusOfEmptyBasket = useRx(vm.statusOfEmptyBasket);
  const count = useRx(vm.count);
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
          <>Ваш кошик порожній{'\u00A0\u00A0\u00A0'}😩</>
        ) : statusOfAdding ? (
          <>
            <span className="added-good">{vm.name}</span> успішно додано до
            кошику!
            {'\u00A0\u00A0\u00A0'}😊
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
            padding: ${emptyBasket ? '28px 55px' : '18px 27px 13px 32px'};
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
          @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
            .status-adding-wrapper {
              left: -125px;
            }
            .status-adding-wrapper:before {
              right: 20px;
            }
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .status-adding-wrapper {
              left: 0;
              top: 70px;
              z-index: 20;
              padding: ${emptyBasket ? '28px 49.5px' : '18px 25px 13px 30px'};
              width: auto;
            }
            .status-adding-wrapper:before {
              right: 15px;
            }
          }
        `}
      </style>
    </>
  );
};

export default StatusOfAddingGoodToBasket;
