import React from 'react';
import { Link } from 'react-scroll';
import logo from "../../Images/Logo Mauri.png";

import "./Header.css"
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [t, i18n] = useTranslation("global");


  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-#78b0a6" >
  <a class="navbar-brand" href="..."><img className='logo' src={logo} alt=''/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      
        <a class="nav-link" href="..."><Link to="home" smooth={true} duration={500}>{t("header.home")}</Link> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="..."><Link to="about" smooth={true} duration={500}>{t("header.about")}</Link></a>
      </li>      <li class="nav-item">
        <a class="nav-link" href="..."><Link to="skills" smooth={true} duration={500}>{t("header.skills")}</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="..."><Link to="projects" smooth={true} duration={500}>{t("header.projects")}</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="..."><Link to="certifications" smooth={true} duration={500}>{t("header.certifications")}</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="..."><Link to="contact" smooth={true} duration={500}>{t("header.contact")}</Link></a>
      </li>
      <button class="btn btn-outline-success my-2 my-sm-0" onClick={() => i18n.changeLanguage("es")} type="button">ES</button>
      <button class="btn btn-outline-success my-2 my-sm-0" onClick={() => i18n.changeLanguage("en")} type="button">EN</button>
    </ul>

  </div>
</nav>

    </header>
  );
}

export default Header;
