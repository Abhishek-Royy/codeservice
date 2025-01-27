import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right. Not only that but this event gives you the chance to give your back-office team.",
    name: "Mahfuz Riad",
    designation: "UI Designer & CEO",
    img: "http://t.commonsupport.com/adro/images/resource/thumb-1.jpg",
  },
  {
    text: "Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right. Not only that but this event gives you the chance to give your back-office team.",
    name: "Mahfuz Riad",
    designation: "UI Designer & CEO",
    img: "http://t.commonsupport.com/adro/images/resource/thumb-1.jpg",
  },
  {
    text: "Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right. Not only that but this event gives you the chance to give your back-office team.",
    name: "Mahfuz Riad",
    designation: "UI Designer & CEO",
    img: "http://t.commonsupport.com/adro/images/resource/thumb-1.jpg",
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="testimonial-section relative py-20 overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute -left-40 top-1/4 w-[700px] h-[700px] bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('http://t.commonsupport.com/adro/images/icons/ring-circle.png')`,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      ></motion.div>

      <div className="large-container mx-auto px-6 max-w-7xl">
        {/* Title */}
        <div className="sec-title text-center mb-16">
          <span className="title text-lg uppercase text-[#CD2234]">Testimonial</span>
          <h2 className="text-4xl font-bold text-[#2B2F6F]">What Our Core Client Say?</h2>
        </div>

        {/* Testimonial Carousel */}
        <Slider {...settings} className="testimonial-carousel">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-block px-4">
              <motion.div
                className="inner-box p-10 bg-white shadow-lg rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-lg text-gray-600 mb-6">{item.text}</p>
                <div className="info-box flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 rounded-full border-4 border-gray-200 shadow-md"
                  />
                  <div>
                    <h4 className="name text-xl font-semibold text-gray-800">{item.name}</h4>
                    <span className="designation text-gray-500">{item.designation}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Image Layer */}
      <div className="thumb-layer absolute right-10 top-32">
        <img
          src="http://t.commonsupport.com/adro/images/resource/user-thumbs.png"
          alt="Testimonials"
          className="w-72 h-auto"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
