import dynamic from 'next/dynamic';
import { useState } from 'react';
import useCollapse from 'react-collapsed';
import VisibilitySensor from 'react-visibility-sensor';
import RespScreenWidth from '../common/mediaConst';

const DynamicMap = dynamic(() => import('./map'), { ssr: false });

const PFSmallObject = ({ object, last }) => {
  const { getCollapseProps, toggleOpen, isOpen } = useCollapse({
    defaultOpen: false,
  });
  return (
    <>
      <div className="ctn">
        {/* <div className="image"> */}
        <img className="image" src="/objects/Swirg2_450_320.jpg" />
        {/* </div> */}
        <div className="field">
          <div>
            <h1>Лагодів</h1>
            <h2>Церква святого Архангела Михаїла.</h2>
            <p>
              Невеличке село Лагодів на Львівщині має досить рідкісну дерев`яну
              церкву святого архангела Михаїла. Церква п`ятикупольна. Документи
              1742 року свідчать, що збудована вона десятьма роками раніше на
              кошти священника й громади.
            </p>
          </div>
          <div {...getCollapseProps()}>
            <img className="image" src="/objects/Swirg2_450_320.jpg" />
            <div>
              <p>
                Невеличке село Лагодів на Львівщині має досить рідкісну
                дерев`яну церкву святого архангела Михаїла. Церква
                п`ятикупольна. Документи 1742 року свідчать, що збудована вона
                десятьма роками раніше на кошти священника й громади.
              </p>
            </div>
          </div>

          <div className="more">
            <a
              href="javascript:void(0)"
              className="more-info"
              onClick={() => toggleOpen()}
            >
              <div className="more-button">
                <div style={{ padding: '10px 15px' }}>
                  {isOpen ? 'Згорнути ' : 'Більше інфо '}
                  {
                    <img
                      style={{
                        top: '3px',
                        height: '16px',
                        width: '15px',
                        position: 'relative',
                      }}
                      src={
                        isOpen ? '/img/above-icon.svg' : '/img/below-icon.svg'
                      }
                    />
                  }
                </div>
              </div>
            </a>
            <a href="javascript:void(0)" className="map">
              <div className="more-button">
                <div style={{ padding: '10px 15px' }}>
                  {'Мапа '}
                  {
                    <img
                      style={{
                        top: '3px',
                        height: '16px',
                        width: '12px',
                        position: 'relative',
                      }}
                      src="/img/map.svg"
                    />
                  }
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .ctn {
          margin: 0 0 ${last ? 0 : 50}px 0;
          text-align: center;
          width: 585px;
        }
        .image {
          width: 550px;
          height: 400px;
          border-radius: 10px;
          box-shadow: 4px 10px 30px 0 var(--invalid-name);
          background-color: #d8d8d8;
        }
        .field {
          position: relative;
          margin: -10px 0 0 0;
          width: 100%;
          border-radius: 15px;
          box-shadow: 2px 10px 30px 0 rgba(9, 21, 85, 0.24);
          background-color: #ffffff;
        }
        .field p {
          padding: 20px 0 0 0;
          text-align: left;
          margin: 0px 20px;
          font-family: Montserrat;
          font-size: 17px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.53;
          letter-spacing: 0.79px;
          color: var(--texticonscolor);
        }
        .field h1 {
          margin: 0 0 0 0;
          padding: 25px 0 0 0;
          text-align: center;
          font-family: Montserrat;
          font-size: 32px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: 0.81;
          letter-spacing: 1.5px;
          color: var(--texticonscolor);
        }
        .field h2 {
          margin: 0;
          padding: 15px 0 0 0;
          text-align: center;
          font-family: Montserrat;
          font-size: 20px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.3;
          letter-spacing: 0.94px;
          color: var(--texticonscolor);
        }

        .more {
          align-items: center;
          display: flex;
          height: 80px;
          width: 100%;
        }
        .more-button {
          position: relative;
          height: 45px;
          border-radius: 22.5px;
          background-color: #ecefff;

          font-family: Montserrat;
          font-size: 19px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.79px;
          color: var(--primarycolor);
        }
        .more a:link {
          text-decoration: none;
          color: #061434;
        }
        .map {
          display: none;
        }
        .more-info {
          margin: 0 auto;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
          .map {
            display: block;
            margin: 0 15px 0 auto;
          }
          .more-info {
            margin: 0 auto 0 15px;
          }
          .field h1 {
            font-size: 24px;
          }
          .field h2 {
            font-size: 14px;
            letter-spacing: 0.65px;
            font-weight: 500;
          }
          .field p {
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 0.65px;
          }
          .more-button {
            font-family: Montserrat;
            font-size: 16px;
          }
          .image {
            width: 330px;
            height: 255px;
          }
          .ctn {
            width: 343px;
          }
        }
      `}</style>
    </>
  );
};
const smallObjects = [
  {
    id: 1,
    type: 'building',
    location: { lat: 49.719827, lng: 24.503354 },
  },
  {
    id: 2,
    type: 'building',
    location: { lat: 49.729227, lng: 24.513854 },
  },
  {
    id: 3,
    type: 'building',
    location: { lat: 49.729427, lng: 24.523254 },
  },
];
const pfMainContent = () => {
  const [selected, setSelected] = useState(smallObjects[0]);
  return (
    <>
      <div className="content">
        <div className="places">
          {smallObjects.map((object, index) => (
            <VisibilitySensor
              key={object.id}
              scrollCheck="true"
              onChange={(isVisible) => isVisible && setSelected(object)}
            >
              <PFSmallObject
                object={object}
                last={index == smallObjects.length - 1}
              />
            </VisibilitySensor>
          ))}
        </div>
        <div className="map">
          <DynamicMap
            selected={selected}
            objects={smallObjects}
            select={setSelected}
          />
        </div>
      </div>
      <style jsx>{`
        .places {
          margin-right: auto;
        }
        .content {
          margin-top: 25px;
          display: flex;
          margin-bottom: 50px;
        }
        .map {
          position: sticky;

          top: 100px;
          width: 550px;
          max-height: calc(100vh - 120px);
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 2px 10px 30px 0 rgba(9, 21, 85, 0.24);
          background-color: #ffffff;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .content {
            margin-top: 0;
            display: flex;
            margin-bottom: 0;
          }

          .map {
            left: 0;
            top: 80px;
            position: fixed;
            z-index: 100;
            width: 100vw;
            height: calc(100vh - 80px);
            border-radius: 0;
            box-shadow: 0;
            max-height: 100vh;
            background-color: #ffffff;
          }
        }
      `}</style>
    </>
  );
};

export default pfMainContent;
