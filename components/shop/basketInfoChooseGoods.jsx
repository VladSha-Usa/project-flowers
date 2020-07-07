import React from 'react';
import BasketMainGood from './basketMainGood';
import GoodDetailsWizardAddOther from './goodDetailsWizardAddOther';
import useRx from './useRx';
import HelperFun from '../common/helper';
import RespScreenWidth from '../common/mediaConst';

const BasketInfoChooseGoods = ({ vm }) => {
  const goodVMs = useRx(vm.goodVMs);
  const countValue = useRx(vm.count);

  return (
    <>
      <div className="info-choose-goods-wrapper">
        <div className="info-choose-status">
          Твій кошик{' '}
          <span className="info-choose-status-amount">
            ({countValue} товар
            {HelperFun.endingOfWord(countValue)})
          </span>
        </div>
        <div className="info-choose-goods">
          {goodVMs.map((goodVM, index) => (
            <div className="choose-good-wrapper" key={index}>
              <BasketMainGood vm={goodVM} />
              <img
                src="/img/good-to-complect-img/cancel-icon.svg"
                onClick={() => vm.deleteGood(goodVM.good.id)}
              />
            </div>
          ))}
          {goodVMs
            .filter((goodVM) => goodVM.good.additionGoodData)
            .map((goodVM, index) => (
              <div className="choose-good-wrapper" key={index}>
                <GoodDetailsWizardAddOther
                  vm={goodVM.good.additionGoodData}
                  basketStyleSettings
                />
                <img src="/img/good-to-complect-img/cancel-icon.svg" />
              </div>
            ))}
          <div className="info-choose-sum">
            <span className="info-choose-sum-intro">Разом:</span>
            <span className="info-choose-sum-num">
              {goodVMs
                .reduce(
                  (sum, good) =>
                    good.good.additionGoodData
                      ? sum + good.good.price + good.good.additionGoodData.price
                      : sum + good.good.price,
                  0
                )
                .toLocaleString({ useGrouping: true })}{' '}
              грн
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .info-choose-goods-wrapper {
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          color: var(--texticonscolor);
          margin-right: 34px;
        }
        .info-choose-status {
          font-size: 24px;
          letter-spacing: 1.26px;
          margin-bottom: 18px;
        }
        .info-choose-status-amount {
          color: #b9c6dc;
        }
        .info-choose-goods {
          width: 646px;
          border-radius: 10px;
          border: solid 1.5px #b9c6dc;
          padding: 20px 18px;
        }
        .info-choose-sum {
          display: flex;
          justify-content: space-between;1
        }
        .info-choose-sum-intro {
          font-size: 20px;
          line-height: 1.3;
          letter-spacing: 1.05px;
        }
        .info-choose-sum-num {
          font-size: 20px;
          line-height: 1.4;
          letter-spacing: 0.94px;
          color: var(--primarycolor);
        }
        .choose-good-wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          border-bottom:1.5px solid #b9c6dc;
          padding-bottom: 12px;
          margin-bottom: 18px;
        }
        .choose-good-wrapper img{
          cursor: pointer;
        }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
            .info-choose-goods-wrapper {
              margin-right: 0;
              margin-bottom: 60px;
            }
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .info-choose-goods {
              width: 335px;
              box-sizing: border-box;
              padding: 15px;
            }
            .info-choose-status {
              font-size: 20px;
              letter-spacing: 1.05px;
            }
            .choose-good-wrapper {
              margin-bottom: 20px;
            }
            .info-choose-sum-intro {
              font-size: 16px;
              line-height: 26px;
              letter-spacing: 0.84px;
            }
            .info-choose-goods-wrapper {
              margin-bottom: 30px;
            }
          }
        `}
      </style>
    </>
  );
};

export default BasketInfoChooseGoods;
