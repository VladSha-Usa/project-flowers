import basketModel from '../../logic/basket';

export default (good) => ({
  countForGood: basketModel.countForGood,
  increase: basketModel.increase,
  decrease: basketModel.decrease,
  good,
});
