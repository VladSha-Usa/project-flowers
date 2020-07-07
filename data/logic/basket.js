import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const goods = new BehaviorSubject([]);
const dataOfGood = new BehaviorSubject({});
const statusOfAdding = new BehaviorSubject(false);
const statusOfEmptyBasket = new BehaviorSubject(false);
const count = goods.pipe(
  map((goodsList) =>
    goodsList.reduce((sum, item) => {
      if (item.additionGoodData) {
        return sum + item.count + item.additionGoodData.count;
      }
      return sum + item.count;
    }, 0)
  )
);

function increase(goodToIncrease) {
  const good = goods.value.find(
    (goodItem) => goodToIncrease.id === goodItem.id
  );
  if (good) {
    good.count += 1;
    goods.next(goods.value);
  }
}
function decrease(goodToDecrease) {
  const good = goods.value.find(
    (goodItem) => goodToDecrease.id === goodItem.id
  );
  if (good) {
    good.count -= 1;
    goods.next(goods.value);
  }
}

function countForGood(good) {
  return goods.pipe(
    map((goodsList) =>
      goodsList
        .filter((item) => item.id === good.id)
        .reduce((sum, item) => sum + item.count, 0)
    )
  );
}

function init() {
  const data = JSON.parse(localStorage.getItem('BasketData')) || [];
  let firstTimerOfEmtyBasket;
  let secondTimerOfEmtyBasket;
  if (data.length === 0) {
    firstTimerOfEmtyBasket = setTimeout(() => {
      statusOfEmptyBasket.next(true);
    }, 2000);
    setTimeout(() => {
      statusOfEmptyBasket.next(false);
    }, 3500);
    secondTimerOfEmtyBasket = setTimeout(() => {
      statusOfEmptyBasket.next(true);
    }, 11000);
    setTimeout(() => {
      statusOfEmptyBasket.next(false);
    }, 12500);
  }
  goods.next(data);
  const subscriber = goods.subscribe((value) =>
    localStorage.setItem('BasketData', JSON.stringify(value))
  );
  setInterval(() => {
    const basketData = JSON.parse(localStorage.getItem('BasketData')) || [];
    if (basketData.length !== 0) {
      clearTimeout(firstTimerOfEmtyBasket);
      clearTimeout(secondTimerOfEmtyBasket);
    }
    goods.next(basketData);
  }, 100);
  return () => {
    subscriber.unsubscribe();
  };
}
function addGood() {
  const newValue = goods.value;
  newValue.push(dataOfGood.value);
  goods.next(newValue);
  if (goods.value.some((good) => good === dataOfGood.value)) {
    statusOfAdding.next(true);
    setTimeout(() => {
      statusOfAdding.next(false);
    }, 1500);
  } else {
    statusOfAdding.next(false);
  }
}

function colectDataOfGood(data) {
  const newData = dataOfGood.value;
  if (data === 'deleteAddGood') {
    delete newData.additionGoodData;
  } else {
    Object.assign(newData, data);
  }
  dataOfGood.next(newData);
}

function deleteGood(id) {
  const newValue = goods.value.filter((good) => good.id !== id);
  goods.next(newValue);
}

const BasketLogic = {
  addGood,
  goods,
  count,
  statusOfAdding,
  statusOfEmptyBasket,
  increase,
  decrease,
  countForGood,
  init,
  colectDataOfGood,
  deleteGood,
};

export default BasketLogic;
