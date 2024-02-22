import { useState } from "react";
import "./Contact.module.css";

function Contact() {

  const [registration,setRegistration] = useState({
    name:"", email:"", date:"", age:"",gender:"",address:"",courses:"",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/demo',{
      method:"POST",
      body: JSON.stringify(registration),
      headers: {
        "Content-Type": "application/json",
      }
    })
    const data = await response.json();
    console.log(data);
    // setRegistration();
  }
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setRegistration({...registration, [name]: value})
   
  }

  return (
     <div className="formContainer py-5">
      <h4 className="text-center display-4">Register Here</h4>
     <form action="/register" onSubmit={handleSubmit}>
      <div>
        <input className="form-control py-2" required type="text" onChange={handleChange} value={registration.name} name="name" placeholder="Enter Your Name" />
      </div>
      <div>
        <input className="form-control py-2" required type="email" onChange={handleChange} value={registration.email} name="email" placeholder="Enter Your Email" />
      </div>
      <div>
        <input className="form-control py-2" required type="date" onChange={handleChange} value={registration.date} name="date" placeholder="Enter Your DOB" />
      </div>
      <div>
        <input className="form-control py-2" required type="string" onChange={handleChange} value={registration.age} name="age" placeholder="Enter Your Age" />
      </div>
      <div>
        <select className="form-control py-2" required onChange={handleChange} name="gender" id="">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
       <input className="form-control py-2" required type="text" name="address"  onChange={handleChange} value={registration.address} placeholder="Enter Your Address" />
      </div>
      <div>
      <select className="form-control py-2" required onChange={handleChange} name="courses" id="">
          <option value="">Select courses</option>
          <option value="C">C</option>
          <option value="C++">C++</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="Web dev">Web development</option>
        </select>
      </div>
      <div>
        <input className="btn btn-success" type="submit" value="Submit" />
      </div>
     </form>
     </div>
  )
}

export default Contact