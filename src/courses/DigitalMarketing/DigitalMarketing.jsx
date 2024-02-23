import React from "react";
import DigitalMarketingForm from "./DigitalMarketingForm";

const DigitalMarketing = () => {
  return (
    <>
    <div className="container text-white text-left">
      <h2 className="fs-1 text-center">Digital Marketing</h2>
      <div className="container mt-5 text-center">
        <ul>
          <li className="fs-5">
            Explore the core principles of digital marketing, encompassing SEO,
            SEM, social media marketing, and content marketing.
          </li>
          <li className="fs-5">
            Acquire pratical experience with industry-standard tools and
            platforms used in digital marketing compaigns.
          </li>
          <li className="fs-5">
            Learn to analyze data, measure campaign performance, and optimize
            strategies to achieve business objectives effectively.
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#DigitalMarketingModal">Register</button>
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
         <div className="modal-body" style={{height:"500px"}}>
             <DigitalMarketingForm/>
         </div>
         
       </div>
     </div>
   </div>
   </>
  );
};

export default DigitalMarketing;
