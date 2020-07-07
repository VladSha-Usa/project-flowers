import PathfinderSlider from './pathfinderSlider';
import RespScreenWidth from '../common/mediaConst';

const PathfinderObject = ({ object, direct }) => {
  const flexDirection = direct ? 'row' : 'row-reverse';
  const textMarginStyle = direct ? 'margin-left: 45px' : 'margin-right: 45px';

  return (
    <>
      <article>
        <p
          className="title small"
          dangerouslySetInnerHTML={{ __html: object.title }}
        />
        <div className="image-list">
          <PathfinderSlider images={object.galleryImages} />
        </div>
        <div style={{ flex: 'auto', overflow: 'hidden' }}>
          <div className="pathfinder-object-text">
            <p
              className="title large"
              dangerouslySetInnerHTML={{ __html: object.title }}
            />
            <p dangerouslySetInnerHTML={{ __html: object.description }} />
          </div>
        </div>
      </article>
      <style jsx>
        {`
          .small {
            display: none;
          }
          article {
            padding-top: 80px;
            display: flex;
            flex-direction: ${flexDirection};
            flex-wrap: nowrap;
            width: 100%;
            min-height: 360px;
          }
          .image-list {
            text-align: center;
            flex: 0 0 450px;
            height: 100%;
          }
          .title {
            font-family: Montserrat;
            font-size: 28px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.57;
            letter-spacing: 1.31px;
            color: #020e2c;
            margin: 5px;
            position: relative;
          }

          .pathfinder-object-text {
            text-align: justify;
            ${direct ? 'margin-left: 105px' : 'margin-right: 105px'};
            font-family: Montserrat;
            font-size: 17px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.53;
            letter-spacing: 0.79px;
            color: #040f2a;
            position: relative;
            z-index: 100;
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
            .pathfinder-object-text {
              font-size: 16px;
            }
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .image-list {
              flex: auto;
              margins-left: auto;
            }
            .image {
              width: 335px;
              height: 280px;
              object-fill: contain;
              border-radius: 25px;
              box-shadow: 4px 10px 30px 0 rgba(9, 21, 85, 0.18);
            }
            article {
              width: 335px;
              padding-top: 30px;
              margins-left: auto;
              flex-wrap: wrap;
              height: inherit;
            }
            .pathfinder-object-text {
              font-size: 14px;
              font-weight: 400;
              letter-spacing: 0.65px;
              margin-right: auto;
              margin-left: auto;
            }
            .title {
              width: 100%;
              text-align: center;
              font-size: 20px;
              margin-bottom: 20px;
              font-weight: 500;
              color: var(--texticonscolor);
            }
            .small {
              display: block;
            }
            .large {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default PathfinderObject;
