import basketModel from '../logic/basket';
import goodDetailsStatusVM from './good1/GoodDetailsStatusVM';
import goodDetailsChooseVM from './good1/GoodDetailsChooseVM';
import goodDetailsSpecificationVM from './good1/GoodDetailsSpecificationVM';
import goodDetailsThingsTookVM from './good1/GoodDetailsThingsTookVM';
import goodDetailsImgGalleryVM from './good1/GoodDetailsImgGalleryVM';
import goodDetailsSeeMoreVM from './good1/GoodDetailsSeeMoreVM';

const good1VM = {
  colectDataOfGood: basketModel.colectDataOfGood,
  init: basketModel.init,
  name: 'Сумка-тубус на вилку',
  price: 1300,
  mainPicture: {
    src: '/img/good-details-prev-slider/photo-main1.jpg',
    srcSet:
      '/img/good-details-prev-slider/photo-main1@2x.jpg 2x, img/good-details-prev-slider/photo-main1@3x.jpg 3x',
  },
  volume: 10,
  goodDetailsStatusVM: goodDetailsStatusVM(),
  goodDetailsChooseVM: goodDetailsChooseVM(),
  goodDetailsSpecificationVM: goodDetailsSpecificationVM(),
  goodDetailsThingsTookVM: goodDetailsThingsTookVM(),
  goodDetailsImgGalleryVM: goodDetailsImgGalleryVM(),
  goodDetailsSeeMoreVM: goodDetailsSeeMoreVM(),
};

function factory() {
  return good1VM;
}

export default factory;
