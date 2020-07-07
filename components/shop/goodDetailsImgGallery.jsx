import Slider from 'react-slick';
import React, { useState, useRef, useEffect } from 'react';
import useOutsideClick from './useOutsideClick';
import RespScreenWidth from '../common/mediaConst';

const GoodDetailsImgGallery = ({ vm }) => {
  const [isOpened, setStatus] = useState(false);
  const displayPopUp = isOpened ? 'flex' : 'none';
  const [dataOfCurrentPopUp, setData] = useState({});
  const [isClient, setIsClient] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => {
    setStatus(false);
  });
  useEffect(() => {
    document.querySelector('.good-details-img-gallery .slick-track').style
      .transition
      ? setStatus(false)
      : null;
    setIsClient(true);
  });

  return (
    <>
      <div className="gallery-wrapper">
        <div className="slide-popup-wrapper">
          <div ref={ref} className="slide-popup">
            <div className="close-popup" onClick={() => setStatus(!isOpened)} />
            <img src={dataOfCurrentPopUp.src} className="popup-img" />
            <span className="popup-subtext">{dataOfCurrentPopUp.subText}</span>
          </div>
        </div>
        <Slider
          infinite
          key={isClient ? 'client' : 'server'}
          slidesToShow={4}
          touchThreshold={200}
          dots
          arrows={false}
          speed={500}
          responsive={
            isClient
              ? [
                  {
                    breakpoint: RespScreenWidth.screenWidthNetbook,
                    settings: {
                      slidesToShow: 3,
                    },
                  },
                  {
                    breakpoint: RespScreenWidth.screenWidthMobile,
                    settings: {
                      slidesToShow: 1,
                      dots: false,
                    },
                  },
                ]
              : null
          }
        >
          {vm.detailsImgGallery.map((slideContent, index) => (
            <div key={index} className="slide-wrapper">
              <div
                className="slide"
                onClick={() => {
                  setData(slideContent);
                  setStatus(!isOpened);
                }}
              >
                <img
                  src={slideContent.src}
                  srcSet={slideContent.srcSet}
                  className="gallery-img"
                />
                <span className="img-subtext">{slideContent.subText}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <style jsx>
        {`
          .gallery-wrapper {
            position: relative;
            font-family: Montserrat;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
          }
          .slide-popup-wrapper {
            position: fixed;
            top: -0;
            bottom: 0px;
            left: 0px;
            right: 0px;
            z-index: 999;
            display: ${displayPopUp};
            background: rgba(0, 0, 0, 0.5);
          }
          .slide-popup {
            margin: auto;
            height: fit-content;
            width: fit-content;
            position: relative;
            display: flex;
            border-radius: 10px;
            box-shadow: 2px 80px 140px 0 rgba(14, 18, 35, 0.25);
            overflow: hidden;
          }
          .close-popup {
            position: absolute;
            width: 40px;
            height: 40px;
            object-fit: contain;
            border-radius: 10px;
            background-color: rgba(14, 17, 30, 0.71);
            display: flex;
            justify-content: center;
            align-items: center;
            top: 10px;
            right: 10px;
            cursor: pointer;
          }
          .close-popup:after {
            content: '';
            position: absolute;
            background-image: url('/img/icon-cancel.svg');
            width: 18px;
            height: 18px;
          }
          .slide-popup .popup-img {
            width: 850px;
            height: 600px;
          }
          .popup-subtext {
            position: absolute;
            bottom: 0;
            height: 55px;
            background-color: rgba(14, 19, 39, 0.75);
            width: 100%;
            font-family: Montserrat;
            font-size: 16px;
            letter-spacing: 0.84px;
            color: var(--white);
            padding: 17px 15px 0 15px;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: pre;
          }
          .gallery-img {
            box-shadow: 2px 2px 24px 0 rgba(9, 21, 85, 0.08);
            outline: none;
            cursor: pointer;
            width: 280px;
            height: 200px;
          }
          .img-subtext {
            position: absolute;
            cursor: pointer;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: pre;
            bottom: 0;
            height: 45px;
            background-color: rgba(14, 19, 39, 0.75);
            font-size: 14px;
            letter-spacing: 0.74px;
            color: #fff;
            padding: 14px 10px 0 10px;
            box-sizing: border-box;
          }
          .slide-wrapper {
            outline: none;
            display: flex !important;
            justify-content: center;
          }
          .slide {
            width: fit-content;
            position: relative;
            overflow: hidden;
            border-radius: 5px;
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
            .slide-popup .popup-img {
              height: 450px;
              width: 700px;
            }
            .popup-subtext {
              height: 50px;
              padding: 15px 15px 0 15px;
            }
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .slide-popup .popup-img {
              height: 260px;
              width: 335px;
            }
            .popup-subtext {
              height: 45px;
              padding: 13px 10px 0 10px;
              font-size: 14px;
              letter-spacing: 0.74px;
            }
            .close-popup {
              display: none;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          .gallery-wrapper .slick-list {
            padding-bottom: 19px;
          }
          .gallery-wrapper .slick-dots li button {
            width: 8px;
            height: 8px;
          }
          .gallery-wrapper .slick-dots li {
            width: 8px;
            height: 8px;
          }
          .gallery-wrapper .slick-dots li button:before {
            content: '';
            width: 8px;
            height: 8px;
            object-fit: contain;
            opacity: 0.25;
            background-color: var(--primarycolor);
            border-radius: 50%;
          }
          .gallery-wrapper .slick-dots .slick-active button {
            width: 15px;
            height: 15px;
          }
          .gallery-wrapper .slick-dots .slick-active {
            width: 15px;
            height: 15px;
          }
          .gallery-wrapper .slick-dots .slick-active button:before {
            opacity: 1;
            width: 15px;
            height: 15px;
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .gallery-wrapper .slick-list {
              padding-bottom: 0;
            }
          }
        `}
      </style>
    </>
  );
};
export default GoodDetailsImgGallery;
