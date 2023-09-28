import React from 'react';
import logo from '../img/logo_multisearch.png'

function Header() {

  return(
    <header className='d-flex justify-content-center header'>
      <img
        alt="logo"
        src={logo}
        width={500}
        height={210}
      />
    </header>
  );
}

export default Header;