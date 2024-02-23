import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [show , setShow] = useState(false);
  console.log(show);
  const handleShow = () =>{
    setShow(true);
  }
  return (
    <>
    <header className="row">
      <div className="col-2">
        <Link to="/">
          <img
            src="./Param_Computers_logo.jpg"
            alt="Param_Computers_logo"
            width="100px"
            height="100px"
          />
        </Link>
      </div>

      <div className="col-8">
        <div className="text-center">
          <h1 className="text-warning">Param computerS</h1>
          <h3 className="text-white">EMPOWERING MINDS. TRANSFORMING FUTURES</h3>
        </div>
      </div>
      <div className="col-2">
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div>
        <GiHamburgerMenu className="text-white fs-2 option_sidebar" style={{cursor:"pointer"}} onClick={handleShow}/>
        </div>
        
      </div>
    </header>
    {
      show ? <Sidebar show={show} setShow={setShow}/> : null
    }
    
    </>
  );
};

export default Header;
