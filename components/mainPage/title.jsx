import RespScreenWidth from '../common/mediaConst';

const Title = () => {
  const titleFirstClass = 'title-first';
  const titleSecondClass = 'title-second';
  const backgroundClass = 'title-background';

  const mainFontSize = 134;
  return (
    <>
      <div className={backgroundClass}>
        FLOWERS
        <br /> WAY
      </div>
      <div className={titleFirstClass}>FLOWERS</div>
      <div className={titleSecondClass}>WAY</div>
      <style jsx>
        {`
          .${titleFirstClass} {
            font-family: 'Archivo Black', sans-serif;
            font-size: ${mainFontSize}px;
            line-height: 1.12;
            letter-spacing: 5px;
            color: #040f2a;

            position: relative;
            padding-top: 30px;
            left: -7px;
          }
          .${titleSecondClass} {
            font-family: 'Archivo Black', sans-serif;
            font-size: ${mainFontSize}px;
            line-height: 1.18;
            letter-spacing: 5.98px;
            color: #1831aa;

            position: relative;
            left: -8px;
            top: -4px;
          }
          .${backgroundClass} {
            object-fit: contain;
            opacity: 0.08;
            font-family: 'Archivo Black', sans-serif;
            font-size: 188px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 0.88;
            letter-spacing: 8.6px;
            color: #296fdc;
            position: absolute;
            left: -130px;
            margin-top: 30px;
          }

          @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
            .${backgroundClass} {
              font-size: 138px;
              left: -50px;
            }
            .${titleFirstClass} {
              font-size: 104px;
            }
            .${titleSecondClass} {
              font-size: 104px;
            }
          }

          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .${backgroundClass} {
              letter-spacing: 3.37px;
              font-size: 72px;
              line-height: 60px;
              left: -20px;
            }
            .${titleFirstClass} {
              font-size: 58px;
              line-height: 62px;
              left: 0px;
              top: 0px;
            }
            .${titleSecondClass} {
              font-size: 58px;
              line-height: 62px;
              left: 0px;
              top: 0px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Title;
