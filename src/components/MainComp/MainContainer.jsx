import React from 'react'
import { Link } from 'react-router-dom';

const MainContainer = () => {
  return (
    <main>
      <div className='d-flex flex-md-row align-items-center justify-content-center gap-3 flex-sm-column' style={{height:"63vh"}}>
          <Link to="/training">  
            <button className='fs-2 text-white fw-bold button'>
              For Trainees
            </button>
          </Link>
          <Link to="/development">
        <button className='fs-2 text-white fw-bold button'>
            For Clients
        </button>
        </Link>
        </div>
        <div className='text-align-left text-white'>
        <h3>Talk To Us</h3>
        <a href='https://wa.me/+917355522487' target='_blank' className='text-white text-decoration-none'>+91 735 5522487</a> <br />
        <a href='https://wa.me/+916392859129' target='_blank' className='text-white text-decoration-none'>+91 6392859129</a> <br />
        <a href="mailto:info@paramcomputers.co.in" className='text-white text-decoration-none'><strong> <i>info@paramcomputers.co.in</i> </strong></a> 
        </div>
    </main>
  )
}

export default MainContainer