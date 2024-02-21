import React from 'react';

const Header = () => {
  return (
    <header className='row'>
      <div className='col-2'>
        <img src="./Param_Computers_logo.jpg" alt="Param_Computers_logo" width='100px' height='100px' />
      </div>
      
      <div className='col-8'>
        <div className='text-center'>
          <h1 className='text-warning'>Param computerS</h1>
          <h3 className='text-white'>EMPOWERING MINDS. TRANSFORMING FUTURES</h3>
        </div>
      </div>
      <div className='col-2'>
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
      </div>
    </header>
  );
};

export default Header;
