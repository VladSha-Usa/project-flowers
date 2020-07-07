import { useState } from 'react';
import Slider from 'react-slick';
import RespScreenWidth from '../common/mediaConst';

const PathfinderSlider = ({ images }) => {
  const [idx, setIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, nextSlide) => setIndex(nextSlide),
    afterChange: (currentSlide) => setIndex(currentSlide),
  };
  let slider = null;
  return (
    <>
      <div className="pathfinder-image-gallery">
        <Slider ref={(sl) => (slider = sl)} {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                onClick={() => slider.slickGoTo(index + 1)}
                className="pathfinder-image"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div
        style={{ display: 'flex', justifyContent: 'center' }}
        className="switcher"
      >
        {images.map((_, index) => (
          <div
            onClick={() => slider.slickGoTo(index)}
            key={index}
            className={idx == index ? 'switcher-item-active' : 'switcher-item'}
          />
        ))}
      </div>

      <style>
        {`

      .slick-slider {
          height: 320px;
      }
      .slick-list {
        border-radius: 12px;
        overflow: hidden;
      }
      .slick-list div {
        height: 320px;
      }
      @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
        .slick-slider, .slick-list div {
          height: 280px;
        }
      }
    `}
      </style>
      <style jsx>
        {`
          .switcher-item-active {
            margin: 0px 2px;
            height: 15px;
            width: 15px;
            background-image: url('/img/bulletSelected.svg');
          }
          .switcher-item {
            margin: 4px 6px;
            width: 8px;
            height: 8px;
            cursor: pointer;
            background-image: url('/img/bulletRegular.svg');
          }
          .pathfinder-image-gallery {
            width: 450px;
            height: 320px;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 4px 10px 30px 0 rgba(9, 21, 85, 0.18);
          }
          .pathfinder-image {
            width: 450px;
            height: 320px;
            object-fit: cover;
            overflow: hidden;
          }

          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .pathfinder-image-gallery {
              width: 335px;
              height: 280px;
            }
            .pathfinder-image {
              width: 335px;
              height: 280px;
            }
          }
          .switcher {
            margin-top: 15px;
            height: 15px;
            position: relative;
          }
        `}
      </style>
    </>
  );
};
export default PathfinderSlider;
