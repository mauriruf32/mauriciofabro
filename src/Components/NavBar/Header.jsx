import React from 'react';
import { Link } from 'react-scroll';
import logo from "../../Images/Logo Mauri.png";

import "./Header.css"
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light text-white" >
  <a class="navbar-brand" href="/home"><img className='logo' src={logo} alt=''/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse"  id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto t-white">
      <li class="nav-item active" className='text-white'>
      
        <a class="nav-link" href="..."><Link to="home" className='text-white' smooth={true} duration={500}>{t("header.home")}</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="..."><Link to="about" className='text-white' smooth={true} duration={500}>{t("header.about")}</Link></a>
      </li>     
       <li class="nav-item">
        <a class="nav-link" href="..."><Link to="skills" className='text-white' smooth={true} duration={500}>{t("header.skills")}</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="..."><Link to="projects" className='text-white' smooth={true} duration={500}>{t("header.projects")}</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="..."><Link to="certifications" className='text-white' smooth={true} duration={500}>{t("header.certifications")}</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="..."><Link to="contact" className='text-white' smooth={true} duration={500}>{t("header.contact")}</Link></a>
      </li>    
      <div class="p-2">
        <button className='boton'  onClick={() => i18n.changeLanguage("es")} type="button">ES</button>

      </div>      
      <div class="p-2">

      <button className='boton'  onClick={() => i18n.changeLanguage("en")} type="button">EN</button>
      </div>

    </ul>

  </div>
</nav>

    </header>
  );
}

export default Header;
