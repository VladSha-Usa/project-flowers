import BasketInfoChooseGoods from './basketInfoChooseGoods';
import BasketOrderForm from './basketOrderForm';
import RespScreenWidth from '../common/mediaConst';

const BasketInfoOrderWireframe = ({ vm }) => {
  return (
    <>
      <div className="info-order-wrapper">
        <BasketInfoChooseGoods vm={vm.basketInfoChooseGoodsVM} />
        <BasketOrderForm />
      </div>
      <style jsx>{`
        .info-order-wrapper {
          display: flex;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
          .info-order-wrapper {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
};

export default BasketInfoOrderWireframe;
