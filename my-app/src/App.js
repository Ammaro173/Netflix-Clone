// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home/Home';
import FavList from './components/FavList/FavList';

const PageNotFound = () => (
  <div>
    404! - <Link to='/'>Home</Link>
  </div>
);

function App() {
  const [favouriteList, setFavList] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER}/getmyMovies`);

      const data = await res.json();
      setFavList(data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/FavList' element={<FavList favouriteList={favouriteList} />} />
        <Route path='*' component={PageNotFound} />
      </Routes>
    </div>
  );
}

export default App;
