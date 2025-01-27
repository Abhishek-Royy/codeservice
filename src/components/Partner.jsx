import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partner = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto pt-24 ">
      <h2 className="text-center  mb-6 text-4xl font-bold text-[#2B2F6F]">Our Partners</h2>
      <Slider {...settings} className="customer-logos">
        <div className="p-4">
          <img
            src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"
            alt="Partner 1"
            className="w-full"
          />
        </div>
        <div className="p-4">
          <img
            src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg"
            alt="Partner 2"
            className="w-full"
          />
        </div>
        <div className="p-4">
          <img
            src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg"
            alt="Partner 3"
            className="w-full"
          />
        </div>
        <div className="p-4">
          <img
            src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg"
            alt="Partner 4"
            className="w-full"
          />
        </div>
        <div className="p-4">
          <img
            src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg"
            alt="Partner 5"
            className="w-full"
          />
        </div>
        <div className="p-4">
          <img
            src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"
            alt="Partner 6"
            className="w-full"
          />
        </div>
        <div className="p-4">
          <img
            src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg"
            alt="Partner 7"
            className="w-full"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Partner;
