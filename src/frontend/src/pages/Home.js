import React, { useState } from 'react';

import { Header, SearchBar, ProductCard } from '../components';
import { getData } from '../services/fetchApi';

import { spinner } from '../img';
import Footer from '../components/Footer';

const INITIAL_DATA = {
  equipments: [],
  materials: [],
  purchaseOrders: [],
  salesOrders: [],
  workforce: [],
}

function Home() {
  
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(INITIAL_DATA);

  const handleClick = async (text) => {
    setIsLoading(true);
    const result = await getData(text);
    setData(result);
    setIsLoading(false);
  }
  
 
  return(
    <div>
      <Header />
      <main className='container mt-5'>
        <SearchBar onClick={handleClick} />

        <div className='d-flex'>
          {isLoading
          ? (
            <div className='loading mt-5'>
              <img
                alt="loading"
                src={spinner}
                width={200}
                height={200}
              />
            </div>
          ) : (
            <ProductCard data={data}/>
          )}
        </div>
      </main>

      <Footer name={'MultSearch'} />
    </div>
  )
}

export default Home;
