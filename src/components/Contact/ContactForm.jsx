import axios from "axios";
import React, { useState } from "react";
const apiKey = import.meta.env.VITE_API_URL_CONTACT;
const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(apiKey);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(apiKey, {
        data: contact,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const contactData = response.data;
      console.log(contactData);
    } catch (error) {
      console.error(error);
    }

    setContact({
        name: "",
        email: "",
        message: "",
    })
  };
  return (
    <>
      <div className="mt-5 text-white">
        <h2 className="text-center heading">Contact Form</h2>
        <div className="container">
          <form action="/contact" method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Name"
                onChange={handleChange}
                value={contact.name}
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Email"
                onChange={handleChange}
                value={contact.email}
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Please Enter Your Message..."
                onChange={handleChange}
                value={contact.message}
                name="message"
                required
              ></textarea>
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <input className="btn btn-success" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
