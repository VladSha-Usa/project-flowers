import { useState } from 'react';
import Slider from 'react-slick';
import RespScreenWidth from '../common/mediaConst';

const GoodDetailsPrevSlider = ({ vm }) => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  return (
    <>
      <div className="good-prev__slider-wrapper">
        <div className="details-slider__first">
          <Slider asNavFor={slider2} ref={(slider) => setSlider1(slider)} dots>
            {vm.gallery.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  srcSet={image.srcSet}
                  onClick={() => slider1.slickGoTo(index + 1)}
                  className="details-slider__img"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="details-slider__second">
          <Slider
            asNavFor={slider1}
            ref={(slider) => setSlider2(slider)}
            slidesToShow={4}
            swipeToSlide
            focusOnSelect
            arrows={false}
          >
            {vm.gallery.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  srcSet={image.srcSet}
                  className="details-slider__img"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <style jsx global>
        {`
          .details-slider__first {
            margin-bottom: 50px;
          }
          .details-slider__first .slick-disabled {
            opacity: 0.25;
          }
          .details-slider__first .slick-next,
          .slick-prev {
            background: none;
          }
          .details-slider__first .slick-prev {
            left: -39px;
            top: 50%;
          }
          .details-slider__first .slick-next {
            right: -40px;
            top: calc(48% - 3px);
          }
          .details-slider__first .slick-next:before,
          .details-slider__first .slick-prev:before {
            content: '';
            font-size: 0px;
            line-height: 0px;
            opacity: 1;
            background-image: url('/img/good-details-prev-slider/next-icon.svg');
            position: absolute;
            width: 16px;
            height: 27px;
          }
          .details-slider__first .slick-prev {
            transform: rotate(180deg);
          }
          .details-slider__first .slick-list {
            border-radius: 12px;
            overflow: hidden;
          }
          .details-slider__first .slick-slider {
            margin-bottom: 45px;
            width: 460px;
          }
          .details-slider__first .details-slider__img {
            width: 460px;
            height: 580px;
          }
          .details-slider__first .slick-dots li button:before {
            width: 8px;
            height: 8px;
            content: '';
            object-fit: contain;
            border-radius: 50%;
            opacity: 0.25;
            background-color: var(--primarycolor);
            top: calc(50% - 4px);
            left: calc(50% - 4px);
          }
          .details-slider__first .slick-dots {
            margin-bottom: -9px;
          }
          .details-slider__first .slick-dots li {
            margin: 0;
            width: 16px;
          }
          .details-slider__first .slick-dots .slick-active button:before {
            width: 15px;
            height: 15px;
            opacity: 1;
            top: calc(50% - 7.5px);
            left: calc(50% - 7.5px);
          }
          .details-slider__second .details-slider__img {
            width: 115px !important;
            height: 120px;
            border-radius: 6px;
          }
          .details-slider__second .slick-slide {
            width: 120px !important;
            cursor: pointer;
          }
          .details-slider__second .slick-list,
          .details-slider__second .slick-track {
            height: 120px;
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
            .details-slider__first .slick-slider {
              width: 400px;
            }
            .details-slider__first .details-slider__img {
              width: 400px;
              height: 520px;
            }
            .details-slider__first .slick-prev {
              left: -29px;
            }
            .details-slider__first .slick-next {
              right: -30px;
            }
            .details-slider__second .details-slider__img {
              width: 95px !important;
              height: 100px;
              border-radius: 6px;
            }
            .details-slider__second .slick-slide {
              width: 105px !important;
              cursor: pointer;
            }
            .details-slider__second .slick-list,
            .details-slider__second .slick-track {
              height: 100px;
            }
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .details-slider__first .slick-prev,
            .details-slider__first .slick-next {
              display: none !important;
            }
            .details-slider__second {
              display: none;
            }
            .details-slider__first {
              margin-bottom: 55px;
            }
            .details-slider__first .slick-slider {
              width: 335px;
            }
            .details-slider__first .details-slider__img {
              width: 335px;
              height: 400px;
            }
            .details-slider__first .slick-dots {
              margin-bottom: -2px;
            }
          }
        `}
      </style>
      <style jsx>
        {`
          .good-prev__slider-wrapper {
            width: 480px;
            margin-left: 45px;
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
            .good-prev__slider-wrapper {
              width: 420px;
              margin-left: 35px;
            }
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .good-prev__slider-wrapper {
              margin-left: 0;
              width: 335px;
            }
          }
        `}
      </style>
    </>
  );
};
export default GoodDetailsPrevSlider;
