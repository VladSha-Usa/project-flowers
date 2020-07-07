import GoodListItem from './goodListItem';
import RespScreenWidth from '../common/mediaConst';

const GoodDetailsSeeMore = ({ vm }) => (
  <>
    <div className="see-more-wrapper">
      <span className="more-title">Давай ще щось подивимось</span>
      <div className="goods-wrapper">
        {vm.moreGoods.map((goodListItem, i) => (
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
    </div>
    <style jsx>
      {`
        .goods-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .more-title {
          display: block;
          font-family: Montserrat;
          font-size: 20px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 1.05px;
          color: var(--texticonscolor);
          text-align: center;
          margin-bottom: 51px;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
          .goods-wrapper {
            padding: 0 15px;
          }
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .goods-wrapper {
            padding: 0;
            justify-content: center;
          }
          .more-title {
            margin-bottom: 40px;
          }
        }
      `}
    </style>
  </>
);

export default GoodDetailsSeeMore;
