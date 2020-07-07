import { Kordura, Oxford, RainBlaBla } from './fabrics';

const bananaBagSmallFork = {
  id: 'banana-bag-small-fork',
  name: 'Сумка-табус маленька\nна вилку',
  price: 1300,
  volume: '6л',
  fabrics: [Kordura, Oxford],
  colors: ['main', 'secondary', 'additional'],
};
const bagBigFork = {
  id: 'bag-big-fork',
  name: 'Велика сумка-тубус \nна вилку',
  price: 1300,
  volume: '10л',
  fabrics: [Kordura, Oxford, RainBlaBla],
  colors: ['main', 'secondary', 'additional'],
};

const Goods = [bananaBagSmallFork, bagBigFork];

export { bananaBagSmallFork, bagBigFork };
export default Goods;
