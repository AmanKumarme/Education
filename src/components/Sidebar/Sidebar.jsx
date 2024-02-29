import React from 'react'
import { Link } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";
const Sidebar = ({show, setShow}) => {
  return (
    <>
      <nav className="sidebar_navigation">
          <Link to="/" onClick={()=> setShow(false)}>Home</Link>
          <Link to="/aboutus" onClick={()=> setShow(false)}>About</Link>
          <Link to="/contact" onClick={()=> setShow(false)}>Contact</Link>
          <RxCross1  className='text-white' onClick={()=> setShow(false)}/>
        </nav>
    </>
  )
}

export default Sidebar