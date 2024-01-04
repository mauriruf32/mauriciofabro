import React from 'react';

import NavBar from "./Components/NavBar/Header"
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Projects from "./Views/Proyects/Proyects";
import Contact from './Views/ContactInfo/Contact';
import Skills from './Components/Skills/Skills';
import Certifications from './Views/Certifications/Certifications';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Certifications/>
      <Contact />
    </div>
  );
}

export default App;


