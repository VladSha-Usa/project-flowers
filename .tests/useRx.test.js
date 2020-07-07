jest.mock('react', () => ({
  useState: jest.fn((x) => [x, () => {}]),
  useEffect: jest.fn(),
}));

import { BehaviorSubject } from 'rxjs';
import useRx from '../components/shop/useRx';
import { map } from 'rxjs/operators';

test('array support', () => {
  const goods = new BehaviorSubject([]);
  expect(useRx(goods)).toEqual([]);
});

test('object support', () => {
  const goods = new BehaviorSubject('Simple String');
  expect(useRx(goods)).toEqual('Simple String');
});

test('operators support', () => {
  const goods = new BehaviorSubject([1, 2, 3]);
  const count = goods.pipe(map((goodValues) => goodValues.length));
  expect(useRx(count)).toEqual(3);
});
