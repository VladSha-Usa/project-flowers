import React from 'react';
import GoodListItem from './goodListItem';
import GoodListData from '../../data/viewModels/goods';
import RespScreenWidth from '../common/mediaConst';

const GoodsList = () => (
  <>
    <div className="goods-list__content-wrapper">
      {GoodListData.map((goodListItem, i) => (
        <GoodListItem
          key={i}
          src={goodListItem.image}
          srcSet={goodListItem.srcSet}
          href={goodListItem.href}
          contentTitle={goodListItem.name}
          capacity={goodListItem.volume}
          price={goodListItem.price}
        />
      ))}
    </div>
    <style jsx>
      {`
        .goods-list__content-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
          .goods-list__content-wrapper {
            padding: 0 15px;
          }
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .goods-list__content-wrapper {
            justify-content: center;
            padding: 0;
          }
        }
      `}
    </style>
  </>
);

export default GoodsList;
