// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';
import ToggleSwitch from '../ToggleSwitch/toggleSwitch';

import "./Header.css"

const Header = () => {
  return (
    <header>
      <h1>Mi Portafolio</h1>
      <nav>
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Inicio</Link></li>
          <li><Link to="about" smooth={true} duration={500}>Sobre Mí</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Proyectos</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contacto</Link></li>
        </ul>
      </nav>
      <ToggleSwitch />
    </header>
  );
}

export default Header;
