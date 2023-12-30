import React from 'react';
import { Link } from 'react-scroll';

import "./Header.css"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Inicio</Link></li>
          <li><Link to="about" smooth={true} duration={500}>Sobre Mi</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Proyectos</Link></li>
          <li><Link to="certifications" smooth={true} duration={500}>Certificaciones</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
