import React, { useState } from 'react';
import lupa from '../img/lupa.svg'

function SearchBar({ onClick }) {
    const [value, setValue] = useState('')

    return(
        <form
            className='input-group mb-3'
            onSubmit={(e) => {
                e.preventDefault();
                onClick(value);
            }}
        >
            <input
                className='form-control'
                type='text'
                onChange={({ target: { value } }) => setValue(value)}
                value={value}
                placeholder='Digite o produto a ser encontrado'
            />
            <button
                type='submit'  
                className='btn btn-secondary' 
            >
                <img
                    alt="lupa"
                    src={lupa}
                    width={48}
                    height={32}
                />
            </button>
        </form>
    );
}

export default SearchBar;