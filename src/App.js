import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Nav from './components/Nav';
import Detalle from './components/Detalle';
import Filtered from './views/Filtered';
import Footer from './components/Footer';
import { Fav } from './views/Fav.jsx';
function App() {
//const apiKey= "bfe23438"


  return (
    <div className="App bg-gradient-to-br from-[#19242E] via-[#203547] to-[#0296D6]">
      <Nav/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/:id"} element={<Detalle/>}/>
        <Route path={"/category/:category"} element={<Filtered/>}/>
        <Route path={"/fav"} element={<Fav/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default (App);
