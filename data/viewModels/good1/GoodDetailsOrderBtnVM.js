import basketModel from '../../logic/basket';

export default () => ({
  colectDataOfGood: basketModel.colectDataOfGood,
  addGood: basketModel.addGood,
});
