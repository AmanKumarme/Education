import React from 'react'
import { Link } from 'react-router-dom';

const MainContainer = () => {
  return (
    <main style={{ height:'80vh'}}>
      <div className='d-flex align-items-center justify-content-center gap-3' style={{height:"55vh"}}>
          <Link to="/Training">  
            <button className='fs-2 text-white fw-bold button'>
              Training
            </button>
          </Link>
        <button className='fs-2 text-white fw-bold button'>
            Development
        </button>
        </div>
        <div className='text-align-left text-white'>
        <h3>Talk To Us</h3>
        <p>+91 735 522487</p>
        <p>+91 950 6277463</p>
        <strong> <i>info@paramcomputers.co.in</i> </strong>
        </div>
    </main>
  )
}

export default MainContainer