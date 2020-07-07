import basketModel from '../../logic/basket';

export default () => ({
  picture: {
    src: '/img/good-to-complect-img/flash-light-petzl-tikkid.jpg',
    srcSet:
      '/img/good-to-complect-img/flash-light-petzl-tikkid@2x.jpg 2x, img/good-to-complect-img/flash-light-petzl-tikkid@3x.jpg 3x',
  },
  name: 'Ліхтарик Petzl Tikkid',
  price: 800,
  count: 1,
  colectDataOfGood: basketModel.colectDataOfGood,
});
