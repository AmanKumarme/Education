import React, { useState } from "react";
import WebDevlopmentStyles from "./WebDevelopment.module.css";

const WebDevelopmentForm = ({success, setSuccess}) => {
  const [registration, setRegistration] = useState({
    name: "",
    email: "",
    date: "",
    age: "",
    gender: "",
    address: "",
    courses: "",
    courseType: "Web Development",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://backend-reg-form-1.onrender.com/demo",
      {
        method: "POST",
        body: JSON.stringify(registration),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    if(registration.name !== "" && registration.email !== "" && registration.date !== "" && registration.age !== "" && registration.gender !== "" && registration.address !== "" && registration.courses !== ""){
      setSuccess(true);
    }
    setRegistration({
      name: "",
      email: "",
      date: "",
      age: "",
      gender: "",
      address: "",
      courses: "",
      courseType: "Web Development",
    });
  };
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value; 
    if(value !== ""){
      setRegistration({ ...registration, [name]: value });
    }
  };
  return (
    <div className={`${WebDevlopmentStyles.formContainer}`}>
      <form
        className={WebDevlopmentStyles.form}
        action="/register"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            className="form-control py-1"
            required
            type="text"
            onChange={handleChange}
            value={registration.name}
            name="name"
            placeholder="Enter Your Name"
          />
        </div>
        <div>
          <input
            className="form-control py-1"
            required
            type="email"
            onChange={handleChange}
            value={registration.email}
            name="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div>
          <input
            className="form-control py-1"
            required
            type="date"
            onChange={handleChange}
            value={registration.date}
            name="date"
            placeholder="Enter Your DOB"
          />
        </div>
        <div>
          <input
            className="form-control py-1"
            required
            type="string"
            onChange={handleChange}
            value={registration.age}
            name="age"
            placeholder="Enter Your Age"
          />
        </div>
        <div>
          <select
            className="form-control py-1"
            required
            onChange={handleChange}
            name="gender"
            id=""
          >
            <option selected value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <input
            className="form-control py-2"
            required
            type="text"
            name="address"
            onChange={handleChange}
            value={registration.address}
            placeholder="Enter Your Address"
          />
        </div>
        <div>
          <select
            className="form-control py-2"
            required
            onChange={handleChange}
            name="courses"
            id=""
          >
            <option selected value="">Select courses</option>
            <option value="HTML CSS & Javascript">HTML CSS & Javascript</option>
            <option value="Frontend Web Development">
              Frontend Web Development
            </option>
            <option value="Backend Web Development">
              Backend Web Development
            </option>
            <option value="Full Stack Web Development">
              Full Stack Web Development
            </option>
          </select>
        </div>
        <input
          className="form-control py-2"
          type="hidden"
          value="Web Development"
        />
        <div>
          <input
            className="btn btn-success"
            type="submit"
            value="Submit"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
      </form>
    </div>
  );
};

export default WebDevelopmentForm;
