import React from "react";
import Slider from "react-slick";
import "./ServiceSlider.module.css"

export default function ServiceSlider() {
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <Slider {...settings}>
     <div className="serviceContainer text-center bg-light text-blue py-5" style={{height: "200px", padding:"20px"}}>
        <h3 style={{color: "purple", marginBottom:"20px"}}>PROGRAMMING</h3>
        <button className="btn text-white" style={{backgroundColor:"purple"}}>Learn more</button>
      </div>
      <div className="serviceContainer text-center bg-light text-blue py-5 " style={{height: "200px", padding:"20px"}}>
        <h3 style={{color: "purple", marginBottom:"20px"}}>WEB DEVELOPMENT</h3>
        <button className="btn text-white" style={{backgroundColor:"purple"}}>Learn more</button>
      </div>
      <div className="serviceContainer text-center bg-light text-blue py-5 " style={{height: "200px", padding:"20px"}}>
        <h3 style={{color: "purple", marginBottom:"20px"}}>DATABASE</h3>
        <button className="btn text-white" style={{backgroundColor:"purple"}}>Learn more</button>
      </div>
      <div className="serviceContainer text-center bg-light text-blue py-5 " style={{height: "200px", padding:"20px"}}>
        <h3 style={{color: "purple", marginBottom:"20px"}}>PROGRAMMING</h3>
        <button className="btn text-white" style={{backgroundColor:"purple"}}>Learn more</button>
      </div>
      <div className="serviceContainer text-center bg-light text-blue py-5 " style={{height: "200px", padding:"20px"}}>
        <h3 style={{color: "purple", marginBottom:"20px"}}>WEB DEVELOPMENT</h3>
        <button className="btn text-white" style={{backgroundColor:"purple"}}>Learn more</button>
      </div>
      <div className="serviceContainer text-center bg-light text-blue py-5 " style={{height: "200px", padding:"20px"}}>
        <h3 style={{color: "purple", marginBottom:"20px"}}>DATABASE</h3>
        <button className="btn text-white" style={{backgroundColor:"purple"}}>Learn more</button>
      </div>
  </Slider>
  );
}