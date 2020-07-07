import { map } from 'rxjs/operators';
import basketModel from '../../logic/basket';
import basketMainGoodVM from './BasketMainGoodVM';

export default () => ({
  goodVMs: basketModel.goods.pipe(
    map((goods) => goods.map((good) => basketMainGoodVM(good)))
  ),
  count: basketModel.count,
  deleteGood: basketModel.deleteGood,
});
