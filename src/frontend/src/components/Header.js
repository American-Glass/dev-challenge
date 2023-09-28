import React from 'react';

function Header() {

  return(
    <header className='d-flex align-items-start justify-content-between px-4 header'>
      <div className='d-flex flex-row align-items-end'>
        <span>HEADER</span>
      </div>
      <button
        className='btn btn-dark mt-2'
        type='button'
      >
        SAIR
      </button>
    </header>
  );
}

export default Header;