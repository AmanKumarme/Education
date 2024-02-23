import React from "react";
import ProgrammingForm from "./ProgrammingForm";

const Programming = () => {
  return (
    <>
      <div className="container text-white text-left">
        <h2 className="fs-1 text-center">Programming</h2>
        <div className="container mt-5 text-center">
          <ul>
            <li className="fs-5">
              Master fundamental programming languages such as Python, Java,
              C++, and more.
            </li>
            <li className="fs-5">
              Dive into advance concepts including data structures, algorithms,
              object-oriented programming, and software development
              methodologies.
            </li>
            <li className="fs-5">
              Hone your problem-solving abilities and solidify your knowledge
              through hands-on coding exercises and projects.
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#programmingModal"
          >
            Register
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="programmingModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Registration Form for Programming
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{height:"500px"}}>
                <ProgrammingForm/>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Programming;
