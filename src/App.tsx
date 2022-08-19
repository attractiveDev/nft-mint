import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NobuNFT from './pages/NobuNFT';
import MintGen3D from './pages/MintGen3D';
import MintNobu from './pages/MintNobu';
import Doxgang from './pages/Doxgang';
import Roadmap from './pages/Roadmap';
import Header from './components/header';
import Footer from './components/footer'
const App = () => {
  return(
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='nobu_nft' element={<NobuNFT />} />
          <Route path='mintGen3d' element={<MintGen3D />} />
          <Route path='mint_nft' element={<MintNobu />} />
          <Route path='doxgang' element={<Doxgang />} />
          <Route path='roadmap' element={<Roadmap />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}


export default App;