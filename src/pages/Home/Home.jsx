import React, { lazy, Suspense, useEffect } from 'react';
import './style.css'
import { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";

const ApiUrl = lazy(() => import( '../../components/ApiUrl/ApiUrl'))
const Home = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },5000)
  }, [])
  return (
    <div >
      <Suspense fallback={<div className='home__loading'><FadeLoader
        color={'rgb(201, 251, 201)'}
        loading={loading}
        // cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        className='home__loading'
      /></div>}>
        <ApiUrl />
      </Suspense>
    
    </div>
  );
};

export default Home;
