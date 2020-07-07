import basketModel from '../../logic/basket';

export default () => ({
  statusOfAdding: basketModel.statusOfAdding,
  name: 'Сумка-тубус на вилку',
  statusOfEmptyBasket: basketModel.statusOfEmptyBasket,
  count: basketModel.count,
});
