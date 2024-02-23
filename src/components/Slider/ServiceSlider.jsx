import React from "react";
import Slider from "react-slick";
import "./ServiceSlider.css";

export default function ServiceSlider(trainingArr) {
  console.log(trainingArr);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    innerWidth:"90%",
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 
  return (
    <Slider {...settings} className="mt-5">
     <div className="serviceContainer programming bg-light d-flex flex-column align-items-center justify-content-center text-center">
        <h3>PROGRAMMING</h3>
        <button className="btn text-white learn_more" >Learn more</button>
      </div>
      <div className="serviceContainer web_development bg-light d-flex flex-column align-items-center justify-content-center text-center" >
        <h3>WEB DEVELOPMENT</h3>
        <button className="btn text-white" >Learn more</button>
      </div>
      <div className="serviceContainer database bg-light d-flex flex-column align-items-center justify-content-center text-center" >
        <h3>DATABASE</h3>
        <button className="btn text-white" >Learn more</button>
      </div>
      <div className="serviceContainer programming bg-light d-flex flex-column align-items-center justify-content-center text-center">
        <h3>PROGRAMMING</h3>
        <button className="btn text-white learn_more" >Learn more</button>
      </div>
      <div className="serviceContainer web_development bg-light d-flex flex-column align-items-center justify-content-center text-center" >
        <h3>WEB DEVELOPMENT</h3>
        <button className="btn text-white" >Learn more</button>
      </div>
      <div className="serviceContainer database bg-light d-flex flex-column align-items-center justify-content-center text-center" >
        <h3>DATABASE</h3>
        <button className="btn text-white" >Learn more</button>
      </div>
  </Slider>
  );
}