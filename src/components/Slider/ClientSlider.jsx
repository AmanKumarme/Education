import React, { useState } from "react";
import Slider from "react-slick";
import "./ServiceSlider.css";
import { Link } from "react-router-dom";

export default function DevelopmentSlider() {
  const [flip, setFlip] = useState(false);
 const handleCard = () => {
  setFlip(true);
 }
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    innerWidth:"90%",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
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
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
     <div className="serviceContainer app_development bg-light d-flex flex-column align-items-center justify-content-center text-center">
        <h3>APP DEVELOPMENT</h3>
        <Link to="/app-development-course">
        <button className="btn text-white" onClick={handleCard}>Learn more</button>
        </Link>
        
      </div>
      <div className="serviceContainer web_development bg-light d-flex flex-column align-items-center justify-content-center text-center" >
        <h3>WEB DEVELOPMENT</h3>
        <Link to="/web-development-course">
        <button className="btn text-white">Learn more</button>
        </Link>
      </div>
      <div className="serviceContainer software_development bg-light d-flex flex-column align-items-center justify-content-center text-center" >
        <h3>SOFTWARE DEVELOPMENT</h3>
        <Link to='/software-development-course'>
        <button className="btn text-white">Learn more</button>
        </Link>
      </div>
      <div className="serviceContainer digital_marketing bg-light d-flex flex-column align-items-center justify-content-center text-center">
        <h3>DIGITAL MARKETING</h3>
        <Link to='/digital-marketing-course'>
        <button className="btn text-white">Learn more</button>
        </Link>
      </div>

  </Slider>
  );
}