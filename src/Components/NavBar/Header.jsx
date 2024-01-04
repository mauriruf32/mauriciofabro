import React from 'react';
import { Link } from 'react-scroll';
import Button from 'react-bootstrap/Button';

import "./Header.css"
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [t, i18n] = useTranslation("global");


  return (
    <header>
      <nav>
        <ul>
          <li><Link to="home" smooth={true} duration={500}>{t("header.home")}</Link></li>
          <li><Link to="about" smooth={true} duration={500}>{t("header.about")}</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>{t("header.skills")}</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>{t("header.projects")}</Link></li>
          <li><Link to="certifications" smooth={true} duration={500}>{t("header.certifications")}</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>{t("header.contact")}</Link></li>


        </ul>
        <div className='botones'>
          <Button onClick={() => i18n.changeLanguage("es")} className='button_H'>ES</Button>
          <Button onClick={() => i18n.changeLanguage("en")} className='button_H'>EN</Button>
          </div>
      </nav>
    </header>
  );
}

export default Header;
