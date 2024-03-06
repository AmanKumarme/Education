import React, { useState } from "react";
import Slider from "react-slick";
import "./ServiceSlider.css";
import { Link } from "react-router-dom";

export default function ClientSlider() {
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
        <h3>APP CREATION</h3>
        <Link to="/client/app-creation">
        <button className="btn text-white" onClick={handleCard}>Learn more</button>
        </Link>
        
      </div>
      <div className="serviceContainer web_development bg-light d-flex flex-column align-items-center justify-content-center text-center" >
        <h3>WEBSITE CREATION</h3>
        <Link to="/client/website-creation">
        <button className="btn text-white">Learn more</button>
        </Link>
      </div>
      <div className="serviceContainer software_development bg-light d-flex flex-column align-items-center justify-content-center text-center" >
        <h3>SOFTWARE CREATION</h3>
        <Link to='/client/software-creation'>
        <button className="btn text-white">Learn more</button>
        </Link>
      </div>
      <div className="serviceContainer digital_marketing bg-light d-flex flex-column align-items-center justify-content-center text-center">
        <h3>DIGITAL MARKETING</h3>
        <Link to='/client/digital-marketing'>
        <button className="btn text-white">Learn more</button>
        </Link>
      </div>

  </Slider>
  );
}