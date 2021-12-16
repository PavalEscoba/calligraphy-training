import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './Header';
import Home from '../pages/home/home';
import Calligraphy from '../pages/calligraphy/Calligraphy';
import Counter from '../pages/counter/counter';

import '../styles/main.scss';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Header />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <Routes>
              <Route exact path="/"  element={<Home />} />
              <Route path="/counter"  element={<Counter />} />
              <Route path="/calligraphy"  element={<Calligraphy />} />
            </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>

    </>
  );
}

export default App;