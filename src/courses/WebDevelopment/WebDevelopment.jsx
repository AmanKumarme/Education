import React from "react";
import WebDevelopmentForm from "./WebDevelopmentForm";

const WebDevelopment = () => {
  return (
    <>
    <div className="container text-white text-left">
     <h2 className="fs-1 text-center">Web Development</h2>
     <div className="container mt-5 text-center">
      <ul>
      <li className="fs-5">
        Learn Essentials of HTML CSS Javascript and other key web technologies.
      </li>
      <li className="fs-5">
        Build dynamic, responsive websites from scratch using popular frameworks
        and libraries such as React, Angular and Vue.js
      </li >
      <li className="fs-5">
        Gain Proficiency in backend development with languages like Node.js, PHP
        and Python, and explore topics such as databases, APIs and server-side
        rendering.
      </li>
      </ul>
    
     </div>
     <div className="d-flex justify-content-center">
     <button className="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#WebDevelopmentModal">
        Register
      </button>
     </div>
    </div>

    <div
        className="modal fade"
        id="WebDevelopmentModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Registration Form for Web Development
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{height:"500px"}}>
                <WebDevelopmentForm/>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDevelopment;
