import React, { useState } from "react";
import WebsiteForm from "./WebsiteForm";
import Alert from "../../alert";

const Website = () => {
  const [success, setSuccess] = useState(false);
  setTimeout(() => {
    setSuccess(false);
  }, 4000);
  return (
    <>
      <div className="container text-white text-left mt-5">
        <h2 className="text-center heading">Website Creation</h2>
        <div className="container mt-5 text-center">
          <p className="about-para">
            "Discover the power of crafting immersive digital experiences
            through web development at Param Computers. Whether you're drawn to
            the artistry of front-end design or the intricacies of back-end
            functionality, our institution provides the perfect platform to hone
            your skills. From mastering HTML, CSS, and JavaScript to delving
            into frameworks like React and Angular, our comprehensive courses
            cover the full spectrum of web development technologies. Led by
            seasoned professionals, our programs blend theory with hands-on
            practice, ensuring you're equipped to tackle real-world challenges
            in the ever-evolving digital landscape. Join our dynamic learning
            community online or offline, and unlock the potential to create
            captivating websites and web applications that leave a lasting
            impact. Embrace the future of digital innovation with Param
            Computers. Enroll now and embark on a journey to become a proficient
            web developer."
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#WebsiteModal"
          >
            Register
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="WebsiteModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Registration Form for creating a Website
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ height: "500px" }}>
              <WebsiteForm success={success} setSuccess={setSuccess} />
            </div>
          </div>
        </div>
      </div>
      {success && <Alert name={"WebSite Creation"} />}
    </>
  );
};

export default Website;
