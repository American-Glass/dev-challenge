import React, { useState, useEffect } from 'react';

import { Header, SearchBar, ProductCard } from '../components';
import { getData } from '../services/fetchApi';

import { spinner } from '../img';

const INITIAL_DATA = {
  equipments: [],
  materials: [],
  purchaseOrders: [],
  salesOrders: [],
  workforce: [],
}

function Home() {
  
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(INITIAL_DATA)

  const handleClick = async (text) => {
    const result = await getData(text)
    setData(result)
  }
  
 
  return(
    <div>
      <Header />
      <SearchBar onClick={handleClick} />
      <ProductCard data={data}/>
    </div>
  )
}

export default Home;
