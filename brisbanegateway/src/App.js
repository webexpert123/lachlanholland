//testdss

import React, { useState } from 'react';
import Layout from './Layout';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import HolidayCabins from './pages/HolidayCabins';
import Caravans from './pages/Caravans';
import Facilities from './pages/Facilities';
import Longterm from './pages/Longterm';
import About from './pages/About';
import Contact from './pages/Contact';
import Groups from './pages/Groups';
import Offers from './pages/Offers';

import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App(props) {
  const [apiResponse, setapiResponse] = useState("");

  componentWillMount();

  function callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setapiResponse(res));
  }

  function componentWillMount() {
    callAPI();
  }

  return (
    <div className='App'>

      <p>Api Response: {apiResponse}</p>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='holidaycabins' element={<HolidayCabins />}/>
            <Route path='/caravans' element={<Caravans />}/>
            <Route path='/facilities' element={<Facilities />}/>
            <Route path='/long-term' element={<Longterm />}/>
            <Route path='/groups' element={<Groups />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/offers' element={<Offers />}/>
          </Route>
      </Routes>
  
    </div>
  )
}

export default App;