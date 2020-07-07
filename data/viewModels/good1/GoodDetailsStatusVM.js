import breadcrumbsNavVM from './BreadcrumbsNavVM';
import shopBasketAmountVM from './ShopBasketAmountVM';
import statusOfAddingGoodToBasketVM from './StatusOfAddingGoodToBasketVM';

export default () => ({
  breadcrumbsNavVM: breadcrumbsNavVM(),
  shopBasketAmountVM: shopBasketAmountVM(),
  statusOfAddingGoodToBasketVM: statusOfAddingGoodToBasketVM(),
});
