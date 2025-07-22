import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandignNew from './components/LandingCompo/LandingNew';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import NavBar from './components/NavBar/NavBar';
import SidePanel from './components/SidePanel/SidePanel'; 

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Router>
      <NavBar toggle={toggleMenu} />
      <SidePanel isOpen={menuOpen} toggle={toggleMenu} />
      <Routes>
        <Route path="/" element={<LandignNew />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
