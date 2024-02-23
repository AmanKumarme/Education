import React from "react";
import DatabaseForm from "./DatabaseForm";

const Database = () => {
  return (
    <>
    <div className="container text-white text-left">
      <h2 className="fs-1 text-center">Database</h2>
      <div className="container mt-5 text-center">
        <ul>
          <li className="fs-5">
            Understand the fundamentals of database design, normalization and
            administration.
          </li>
          <li className="fs-5">
            Master SQL and database querying techniques for efficient data
            manipulation and retrieval.
          </li>
          <li className="fs-5">
            Explore advance database concepts such as optimization, transaction
            management, and data sequirity protocols.
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#databaseModal">Register</button>
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
           <div className="modal-body" style={{height:"500px"}}>
               <DatabaseForm/>
           </div>
           
         </div>
       </div>
     </div>
     </>
  );
};

export default Database;
