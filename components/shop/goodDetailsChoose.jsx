import RespScreenWidth from '../common/mediaConst';
import GoodDetailsPrevSlider from './goodDetailsPrevSlider';
import GoodDetailsWizard from './goodDetailsWizard';

const GoodDetailsChoose = ({ vm }) => (
  <>
    <div className="good-details-choose-wrapper">
      <GoodDetailsPrevSlider vm={vm.goodDetailsPrevSliderVM} />
      <GoodDetailsWizard vm={vm.goodDetailsWizardVM} />
    </div>
    <style jsx>
      {`
        .good-details-choose-wrapper {
          display: flex;
          flex-direction: row;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
          .good-details-choose-wrapper {
            justify-content: space-between;
          }
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .good-details-choose-wrapper {
            flex-direction: column;
          }
        }
      `}
    </style>
  </>
);

export default GoodDetailsChoose;
