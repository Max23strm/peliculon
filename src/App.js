import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Nav from './components/Nav';
import Detalle from './components/Detalle';
import Filtered from './views/Filtered';
import { useState } from 'react';
import Footer from './components/Footer';
function App() {
const apiKey= "bfe23438"


  return (
    <div className="App bg-gradient-to-br from-[#19242E] via-[#203547] to-[#0296D6]">
      <Nav/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/:id"} element={<Detalle/>}/>
        <Route path={"/category/:category"} element={<Filtered/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default (App);
