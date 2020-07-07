import React, { useReducer } from 'react';
import RespScreenWidth from '../common/mediaConst';
import GoodDetailsWizardTitle from './goodDetailsWizardTitle';
import GoodDetailsWizardPicker from './goodDetailsWizardPicker';
import GoodDetailsWizardAddOther from './goodDetailsWizardAddOther';
import GoodDetailsOrderBtn from './goodDetailsOrderBtn';

function fabricReducer(state, action) {
  switch (action.type) {
    case 'setFabric':
      return { fabric: action.payload, print: action.payload.prints[0] };
    case 'setPrint':
      return { fabric: state.fabric, print: action.payload };
    default:
      throw new Error();
  }
}

function extractAction(dispatch, actionType) {
  return (payload) => {
    dispatch({ type: actionType, payload });
  };
}

const GoodDetailsWizard = ({ vm }) => {
  const { fabrics } = vm.good;

  const [state, dispatch] = useReducer(fabricReducer, {
    fabric: fabrics[0],
    print: fabrics[0].prints[0],
  });
  vm.colectDataOfGood({
    fabric: state.fabric.name,
    print: state.print.name,
  });
  return (
    <>
      <div className="good-wizard-wrapper">
        <GoodDetailsWizardTitle vm={vm.goodDetailsWizardTitleVM} />
        <div className="wizard-picker-wrapper">
          <GoodDetailsWizardPicker
            vm={{
              mainTheme: 'Основна тканина',
              items: fabrics,
              selected: [state.fabric, extractAction(dispatch, 'setFabric')],
            }}
          />
          <GoodDetailsWizardPicker
            vm={{
              mainTheme: 'Основний колір',
              items: state.fabric.prints,
              selected: [state.print, extractAction(dispatch, 'setPrint')],
            }}
          />
        </div>
        <GoodDetailsWizardAddOther vm={vm.goodDetailsWizardAddOtherVM} />
        <GoodDetailsOrderBtn vm={vm.goodDetailsOrderBtnVM} />
      </div>
      <style jsx>
        {`
          .good-wizard-wrapper {
            width: 380px;
            margin-left: 96px;
          }
          .wizard-picker-wrapper {
            padding-bottom: 20px;
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
            .good-wizard-wrapper {
              margin-left: 0px;
            }
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .good-wizard-wrapper {
              width: 335px;
            }
            .wizard-picker-wrapper {
              padding-bottom: 9px;
            }
          }
        `}
      </style>
    </>
  );
};
export default GoodDetailsWizard;
