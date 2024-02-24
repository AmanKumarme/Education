import React from "react";
import ProgrammingForm from "./ProgrammingForm";

const Programming = () => {
  return (
    <>
      <div className="container text-white text-left">
        <h2 className="fs-1 text-center">Programming</h2>
        <div className="container mt-5 text-center">
          <p className="fs-5">
            "Embark on a journey of innovation and mastery with programming
            languages at Param Computers. Whether you're a novice or seasoned
            coder, our institution offers a dynamic learning environment
            tailored to your needs. Dive into the world of programming
            languages, where creativity meets problem-solving, and possibilities
            are limitless. Gain expertise in languages like Python, JavaScript,
            Java, C++, and more, unlocking doors to lucrative career
            opportunities in tech. Our comprehensive courses, led by industry
            experts, ensure you develop the skills demanded by today's digital
            landscape. Join us online or offline and become part of a vibrant
            community dedicated to shaping the future through code. Enroll now
            and ignite your passion for programming at Param Computers."
          </p>
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
            <div className="modal-body" style={{ height: "500px" }}>
              <ProgrammingForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programming;
