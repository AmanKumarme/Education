import React, { useState } from "react";
import AppDevelopmentForm from "./AppDevelopmentForm";
import Alert from "../../alert";

const AppDevelopment = () => {
  const [success, setSuccess] = useState(false);
  setTimeout(() =>{
    setSuccess(false);
  },4000)
  return (
    <>
      <div className="container text-white mt-5">
        <h2 className="heading text-center">App Development</h2>
        <div className="container mt-5 text-center">
          <p className="about-para">
            "Welcome to Application Development! At Param Computers, we are
            dedicated to providing expert application development solutions
            based on your needs and aspirations. We understand your business
            requirements and utilize the latest technologies to craft
            applications tailored to your needs. Our experienced development
            team ensures that your application is of high quality, secure, and
            user-friendly. Our goal is to develop progressive and user-friendly
            applications to make your business more successful. Additionally, we
            stand by you at every step of your development process. Let's
            collaborate on application development for your business and turn
            your dreams into reality!"
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#AppDevelopment"
          >
            Register
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="AppDevelopment"
        tabIndex="-1"
        aria-labelledby="AppDevelopmentLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="AppDevelopmentLabel">
                Registration Form for App Development
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ height: "500px" }}>
              <AppDevelopmentForm success={success} setSuccess={setSuccess}/>
            </div>
          </div>
        </div>
      </div>
      {success && <Alert name={"App Development"} />}
    </>
  );
};

export default AppDevelopment;
