import basketStatusVM from './basket/BasketStatusVM';
import basketInfoOrderWireframeVM from './basket/BasketInfoOrderWireframeVM';

const basketVM = {
  basketStatusVM: basketStatusVM(),
  basketInfoOrderWireframeVM: basketInfoOrderWireframeVM(),
};

function factory() {
  return basketVM;
}

export default factory;
