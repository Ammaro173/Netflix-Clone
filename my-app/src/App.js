// import logo from './logo.svg';
import './App.css';
import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home/Home';

const PageNotFound = () => (
  <div>
    404! - <Link to='/'>Home</Link>
  </div>
);

function App() {
  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/FavList' element={<FavList />} /> */}
        <Route component={PageNotFound} />
      </Routes>
    </div>
  );
}

export default App;
