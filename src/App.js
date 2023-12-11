import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import About from './Views/About/About';
import Contact from './Views/ContactInfo/Contact';
import Home from './Views/Home/Home';
import Proyects from "./Views/Proyects/Proyects";


function App() {
  return (
    <Router>
      <div>
        <nav>
          Mauricio Fabro
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/proyects">Projectos</Link></li>
            <li><Link to="/about">Sobre Mi</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
