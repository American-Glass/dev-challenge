import React, { useState } from 'react';

function SearchBar({ onClick }) {
    const [value, setValue] = useState('')

    return(
        <form
            className=''
            onSubmit={(e) => {
                e.preventDefault();
                onClick(value);
            }}
        >
            <input
                type='text'
                onChange={({ target: { value } }) => setValue(value)}
                value={value}
            />
            <button
                type='submit'   
            >
                ENVIAR
            </button>
        </form>
    );
}

export default SearchBar;