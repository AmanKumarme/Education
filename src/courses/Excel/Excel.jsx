import React from "react";
import ExcelForm from "./ExcelForm";

const Excel = () => {
  return (
    <>
      <div className="container text-white">
        <h2 className="fs-1 text-center">Advance Excel</h2>
        <div className="container mt-5 text-center">
          <p className="fs-5">
            Master the art of data analysis and optimization with Advanced Excel
            courses at Param Computers. Dive deep into the powerful
            functionalities of Excel, unlocking its full potential to streamline
            workflows, analyze data trends, and make informed business
            decisions. Our comprehensive curriculum covers advanced features
            such as macros, pivot tables, data visualization, and more,
            empowering you to become an Excel expert. Whether you're a business
            professional seeking to enhance productivity or a data enthusiast
            eager to sharpen your analytical skills, our online or offline
            courses cater to learners of all levels. Led by experienced
            instructors, our hands-on training ensures practical proficiency in
            Excel, giving you a competitive edge in today's data-driven world.
            Join us at Param Computers and take the first step towards mastering
            Excel for greater efficiency and success in your professional
            endeavors. Enroll now and unlock the limitless possibilities
            of Advanced Excel.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#AdvanceExcel"
          >
            Register
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="AdvanceExcel"
        tabIndex="-1"
        aria-labelledby="AdvanceExcelLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="AdvanceExcelLabel">
                Registration Form for Advance Excel
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ height: "500px" }}>
              <ExcelForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Excel;
