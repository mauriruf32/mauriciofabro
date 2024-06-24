import React from 'react';
import "./App.css"
import NavBar from "./Components/NavBar/Header"
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Projects from "./Views/Proyects/Proyects";
import Contact from './Views/ContactInfo/Contact';
import Skills from './Components/Skills/Skills';
import Certifications from './Views/Certifications/Certifications';
import Footer from './Components/Footer/Footer';
import Error404 from "./Components/error404/Error404"

function App() {
  return (
    <div className='containerApp'>
      <NavBar />
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Certifications/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;


