import React from "react";
import ServiceSlider from "./ServiceSlider";

const AboutUs = () => {
  return (
    <div className="mt-5 text-white px-5">
      <h2 className="text-center">About Us</h2>
      <p className="fs-5">
        Welcome to Param Computers, a pioneer in computer eductaion since 2001.
        Founded by Prashant Mathur, our institution has been dedicated to
        empowering individuals with the knowledge and skills needed to thrive in
        ever-evolving digital landscape. Over the past 23 years, we have had the
        privilege of guiding countless students on their journey to mastering
        various aspects of computer science and technology. At Param Computers,
        we believe in fostering a dynamic learning environment that encourages
        creativity, critical thinking and innovation. Our team of experienced
        educators is committed to providing top-quality instruction, personalized
        support, and hands-on training to ensure our students reach thier full
        potential. Whether you're a beginner looking to build a strong
        foundation or a seasoned proffessional aiming to stay ahead of the
        curve, Param Computers is here to help you succeed. Join us and embark on a
        transformative learning experience that will shape your future in the digital age.
      </p>
      <ServiceSlider/>
    </div>
  );
};

export default AboutUs;
