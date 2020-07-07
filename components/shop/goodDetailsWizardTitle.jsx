import RespScreenWidth from '../common/mediaConst';

const GoodDetailsWizardTitle = ({ vm }) => (
  <>
    <div className="wizard__title">
      <span className="wizard__title-description">
        {vm.name}
        {vm.volume ? ` ${vm.volume}л` : ''}.
      </span>
      <span className="wizard__title-price">
        {vm.price.toLocaleString({ useGrouping: true })} грн
      </span>
    </div>
    <style jsx>
      {`
        .wizard__title {
          font-family: Montserrat;
          font-size: 24px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 1.26px;
          color: var(--texticonscolor);
          display: flex;
          flex-direction: column;
          margin-bottom: 35px;
        }
        .wizard__title-description {
          margin-bottom: 15px;
        }
        .wizard__title-price {
          color: var(--primarycolor);
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .wizard__title {
            font-size: 20px;
            letter-spacing: 1.05px;
            margin-bottom: 30px;
          }
        }
      `}
    </style>
  </>
);
export default GoodDetailsWizardTitle;
