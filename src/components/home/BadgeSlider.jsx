import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './BadgeSlider.css';
import badgeData from '/src/assets/images/badgeslider/metadata.json';

const BadgeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow" aria-label="Previous Slide"></button>',
    nextArrow: '<button class="slide-arrow next-arrow" aria-label="Next Slide"></button>',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 851,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 451,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="badge-slider">
      <Slider {...settings}>
        {badgeData.map((badge) => (
          <div key={badge.index} className="badge-slide">
            <img src={badge.path} alt={badge.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BadgeSlider;
