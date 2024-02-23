import React from 'react'
import { Link } from 'react-router-dom';

const MainContainer = () => {
  return (
    <main>
      <div className='d-flex flex-md-row align-items-center justify-content-center gap-3 flex-sm-column' style={{height:"63vh"}}>
          <Link to="/training">  
            <button className='fs-2 text-white fw-bold button'>
              Training
            </button>
          </Link>
          <Link to="/development">
        <button className='fs-2 text-white fw-bold button'>
            Development
        </button>
        </Link>
        </div>
        <div className='text-align-left text-white'>
        <h3>Talk To Us</h3>
        <a href='tel:+91735522487' className='text-white text-decoration-none'>+91 735 522487</a> <br />
        <a href='tel:+919506277463' className='text-white text-decoration-none'>+91 950 6277463</a> <br />
        <a href="mailto:info@paramcomputers.co.in" className='text-white text-decoration-none'><strong> <i>info@paramcomputers.co.in</i> </strong></a> 
        </div>
    </main>
  )
}

export default MainContainer