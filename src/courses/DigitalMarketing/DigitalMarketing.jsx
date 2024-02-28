import React from "react";

import DigitalMarketingForm from "./DigitalMarketingForm";

const DigitalMarketing = () => {


  return (
    <>
      <div className="container text-white mt-5">
        <h2 className="heading text-center">Digital Marketing</h2>
        <div className="container mt-5 text-center">
          <p className="about-para">
            "Discover the dynamic world of digital marketing with Param
            Computers. From search engine optimization (SEO) to social media
            marketing and beyond, our comprehensive courses equip you with the
            skills to thrive in today's competitive online landscape. Learn how
            to craft compelling content, analyze market trends, and leverage
            digital tools to reach your target audience effectively. Led by
            industry experts, our online or offline programs provide hands-on
            experience and practical insights to help you succeed in this
            fast-paced field. Whether you're a business professional looking to
            enhance your marketing skills or an aspiring entrepreneur eager to
            make your mark, Param Computers offers the perfect platform to
            elevate your digital marketing expertise. Join us and unlock the
            potential to drive growth and achieve success in the digital realm.
            Enroll now and embark on a journey to become a proficient digital
            marketer."
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#DigitalMarketingModal"
          >
            Register
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="DigitalMarketingModal"
        tabIndex="-1"
        aria-labelledby="DigitalMarketingModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="DigitalMarketingModalLabel">
                Registration Form for Digital Marketing
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ height: "500px" }}>
              <DigitalMarketingForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketing;
