import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="slider-badag" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="slider-badging" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="slider-scale" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="slider-scales" />
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }

  li.stick-active button::before {
    color: white;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    border: 4px solid transparent;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
