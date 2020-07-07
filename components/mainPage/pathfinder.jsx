import PathfinderObject from './pathfinderObject';
import objects from '../../data/viewModels/pathfinder/objects';
import RespScreenWidth from '../common/mediaConst';

const Pathfinder = () => (
  <>
    <div>
      <div className="pathfinder-caption-background-text">Путівник</div>
      <div className="pathfinder-caption-text">Путівник</div>
    </div>

    <div className="pathfinder-story-text">
      На цій сторінці ми зібрали об’єкти <br />
      Львівської області варті вашої уваги
    </div>
    <div style={{ height: '1px', paddingBottom: '31px' }}>
      <img
        style={{ position: 'relative', left: '477px', top: '-67px' }}
        src="/img/vector-background.svg"
        className="vector-background"
      />
    </div>
    {objects.map((object, index) => (
      <PathfinderObject key={index} object={object} direct={index % 2 == 0} />
    ))}

    <style jsx>
      {`
        .background-path {
        }
        .vector-background {
          width: 484px;
          object-fit: contain;
        }
        .pathfinder-caption-background-text {
          object-fit: contain;
          opacity: 0.12;
          font-family: Montserrat;
          font-size: 38px;
          font-weight: 900;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.05;
          letter-spacing: 1.78px;
          color: var(--transparency);

          text-transform: uppercase;
          text-align: center;
          position: relative;
        }
        .pathfinder-caption-text {
          font-family: Montserrat;
          font-size: 28px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 1.31px;
          color: var(--texticonscolor);
          text-transform: uppercase;
          text-align: center;
          position: relative;
          top: -18px;
        }
        .pathfinder-story-text {
          font-family: Montserrat;
          font-size: 17px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.53;
          letter-spacing: 0.79px;
          text-align: center;
          color: #061434;
        }
        .pathfinder-object-text {
          font-family: Montserrat;
          font-size: 17px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.53;
          letter-spacing: 0.79px;
          color: var(--texticonscolor);
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
          .vector-background {
            display: none;
          }
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .vector-background {
            display: none;
          }
          .pathfinder-story-text br {
            display: none;
          }
        }
      `}
    </style>
  </>
);

export default Pathfinder;
