import React, { useState } from "react";
import DatabaseForm from "./DatabaseForm";
import Alert from "../../alert";

const Database = () => {
  const [success, setSuccess] = useState(false);
  setTimeout(() =>{
    setSuccess(false);
  },4000)
  return (
    <>
      <div className="container text-white text-left mt-5">
        <h2 className="heading text-center">Database</h2>
        <div className="container mt-5 text-center">
          <p className="about-para">
            "Uncover the backbone of modern data-driven applications with
            Database Management Systems at Param Computers. Dive into the heart
            of information organization, storage, and retrieval, mastering
            essential concepts and cutting-edge technologies. From relational
            databases like MySQL and PostgreSQL to NoSQL solutions like MongoDB,
            our courses cover a diverse array of database systems to suit every
            need. Learn from industry experts who will guide you through the
            intricacies of database design, optimization, and administration,
            empowering you to build robust, scalable data solutions. Whether
            you're a beginner or seasoned professional, our flexible online or
            offline programs provide the perfect environment to elevate your
            skills and excel in the world of data management. Join us at Param
            Computers and embark on a journey to become a proficient database
            administrator or developer. Enroll now and unlock the gateway to a
            rewarding career in the realm of data."
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#databaseModal"
          >
            Register
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="databaseModal"
        tabIndex="-1"
        aria-labelledby="databaseModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="databaseModalLabel">
                Registration Form for Database
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ height: "500px" }}>
              <DatabaseForm success={success} setSuccess={setSuccess}/>
            </div>
          </div>
        </div>
      </div>
      {
       
        success && ( <Alert name={"database course"} /> ) 
      }
 
    </>
  );
};

export default Database;
