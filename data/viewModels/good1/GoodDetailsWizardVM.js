import basketModel from '../../logic/basket';
import { bagBigFork } from '../../data/goods';
import goodDetailsWizardTitleVM from './GoodDetailsWizardTitleVM';
import goodDetailsWizardPickerVM from './GoodDetailsWizardPickerVM';
import goodDetailsWizardAddOtherVM from './GoodDetailsWizardAddOtherVM';
import goodDetailsOrderBtnVM from './GoodDetailsOrderBtnVM';

export default () => ({
  colectDataOfGood: basketModel.colectDataOfGood,
  good: bagBigFork,
  goodDetailsWizardTitleVM: goodDetailsWizardTitleVM(),
  goodDetailsWizardPickerVM: goodDetailsWizardPickerVM(),
  goodDetailsWizardAddOtherVM: goodDetailsWizardAddOtherVM(),
  goodDetailsOrderBtnVM: goodDetailsOrderBtnVM(),
});
