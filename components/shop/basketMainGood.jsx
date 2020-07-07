import React from 'react';
import useRx from './useRx';
import RespScreenWidth from '../common/mediaConst';

const BasketMainGood = ({ vm }) => {
  const amount = useRx(vm.countForGood(vm.good));
  const activeMinus =
    amount <= 1
      ? '/img/remove-button-not-active.svg'
      : '/img/remove-button.svg';
  const fields = [
    {
      name: 'Об’єм',
      field: 'volume',
      unitOfMeasure: 'л',
    },
    {
      name: 'Основна тканина',
      field: 'fabric',
    },
    {
      name: 'Основний колір',
      field: 'print',
    },
    {
      name: 'Додатковий колір',
      field: 'additionalColor',
    },
    {
      name: 'Марка фурнітури',
      field: 'brandOfAccessories',
    },
    {
      name: 'Колір фурнітури',
      field: 'colorOfAccessories',
    },
    {
      name: 'Колір строп',
      field: 'colorOfSlings',
    },
    {
      name: 'Сума',
      field: 'price',
      unitOfMeasure: 'грн',
    },
  ];
  const mainGoodDescription = fields
    .filter((field) => vm.good[field.field])
    .map((field, index) => (
      <div key={index} className="good-parametr">
        {field.name}: {field.unitOfMeasure === 'грн' ? ' ' : ''}
        <span className="good-parametr-main">
          {vm.good[field.field]}
          {field.unitOfMeasure === 'грн' ? ' ' : ''}
          {field.unitOfMeasure}
        </span>
      </div>
    ));
  return (
    <>
      <div className="main-good-wrapper">
        <img
          className="main-good-img"
          src={vm.good.picture.src}
          srcSet={vm.good.picture.srcSet}
        />
        <div className="main-good-info">
          <div className="main-good-name">{vm.good.name}.</div>
          <div className="main-good-control-info">
            <div
              className="control-amount-wrapper"
              onClick={() => (amount > 1 ? vm.decrease(vm.good) : null)}
            >
              <img src={activeMinus} />
            </div>
            <div className="amount">{amount}</div>
            <div className="control-amount-wrapper">
              <img
                src="/img/add-button.svg"
                onClick={() => vm.increase(vm.good)}
              />
            </div>
            <div className="main-amount">
              {amount}
              шт.
            </div>
          </div>
          <div className="main-good-description">
            <div className="main-good-name-mob">{vm.good.name}.</div>
            {mainGoodDescription}
          </div>
        </div>
        <div className="main-good-description-mob">
          <div className="main-good-name-mob">{vm.good.name}.</div>
          {mainGoodDescription}
        </div>
      </div>
      <style jsx>
        {`
          .main-good-wrapper {
            font-family: Montserrat;
            font-size: 16px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.63;
            letter-spacing: 0.84px;
            color: var(--texticonscolor);
            display: flex;
            align-items: flex-start;
          }
          .main-good-img {
            object-fit: contain;
            width: 100px;
            height: 120px;
          }
          .main-good-name {
            font-size: 20px;
            font-weight: 600;
            line-height: 1.3;
            letter-spacing: 1.05px;
            margin-bottom: 20px;
          }
          .main-good-name-mob {
            display: none;
            font-weight: 600;
            margin-bottom: 8px;
          }
          .main-good-description-mob {
            display: none;
          }
          .main-good-control-info {
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 1.05px;
            display: flex;
            align-items: center;
            margin-bottom: 15px;
          }
          .control-amount-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
          .main-good-info {
            margin-left: 30px;
          }
          .amount {
            width: 46px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .main-amount {
            font-size: 16px;
            letter-spacing: 0.75px;
            margin-left: 20px;
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .main-amount {
              display: none;
            }
            .main-good-name {
              display: none;
            }
            .main-good-name-mob {
              display: block;
            }
            .main-good-description-mob {
              display: block;
            }
            .main-good-description {
              display: none;
            }
            .main-good-wrapper {
              flex-wrap: wrap;
            }
            .main-good-info {
              align-self: center;
              margin-left: 26px;
            }
            .main-good-img {
              margin-bottom: 10px;
            }
            .control-amount-wrapper img {
              height: 40px;
              width: 40px;
            }
            .main-good-control-info {
              margin-bottom: 0;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          .good-parametr {
            margin-bottom: 8px;
          }
          .good-parametr-main {
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
};

export default BasketMainGood;
