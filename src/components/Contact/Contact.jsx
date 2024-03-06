import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <>
      <div className="mt-5 text-white px-sm-5">
        <h2 className="text-center heading">Contact Us</h2>
        <div className="row mt-5 address">
          <div className="col-12 col-md-6">
            <h3>Connect with Us</h3>
            <a
              href="https://wa.me/+917355522487"
              target="_blank"
              className="text-white text-decoration-none sub-heading whatsapp"
            >
              <IoLogoWhatsapp
                style={{ color: "#25D366" }}
                className="whatsapp-logo fs-4"
              />{" "}
              +91 735 5522487
            </a>{" "}
            <br />
            <a
              href="https://wa.me/+916392859129"
              target="_blank"
              className="text-white text-decoration-none sub-heading whatsapp"
            >
              <IoLogoWhatsapp
                style={{ color: "#25D366" }}
                className="whatsapp-logo fs-4"
              />{" "}
              +91 6392859129
            </a>{" "}
            <br />
            <a
              href="mailto:info@paramcomputers.co.in"
              className="text-white text-decoration-none sub-heading email"
            >
              <MdEmail
                style={{ color: "#E70000" }}
                className="email-logo fs-4"
              />
              <strong>
                {" "}
                <i>info@paramcomputers.co.in</i>{" "}
              </strong>
            </a>
            <h3 className="mt-5">Address</h3>
            <a
              href="https://maps.app.goo.gl/RGeubd5FcDGqYsaV7"
              target="_blank"
              className="text-white text-decoration-none sub-heading loaction"
            >
              <IoLocation className="fs-4 loaction-logo" />
              Awas Vikas Jhansi
            </a>
          </div>
          <div className="col-12 col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3602.550714930499!2d78.5305054753902!3d25.453280077547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDI3JzExLjgiTiA3OMKwMzEnNTkuMSJF!5e0!3m2!1sen!2sin!4v1709733224203!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <ContactForm />
    </>
  );
};

export default Contact;
