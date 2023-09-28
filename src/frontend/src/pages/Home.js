import React, { useState, useEffect } from 'react';

import { Header, SearchBar } from '../components';
import { getData } from '../services/fetchApi';

import { spinner } from '../img';

function Home() {
  
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    console.log("Data", data);
  }, [data])

  const handleClick = async (text) => {
    const result = await getData(text)
    setData(result)
  }
  
 
  return(
    <div>
      <Header />
      <SearchBar
        onClick={handleClick}
      />
      <div className='d-flex'>
        {isLoading
        ? (
          <div className='loading'>
            <img alt="loading" src={spinner} width={200} height={200}/>
          </div>
        ) : (
          <main className='d-flex flex-column'>
            <span>TESTE</span>
          </main>
        )}
      </div>

    </div>
  )
}

export default Home;
