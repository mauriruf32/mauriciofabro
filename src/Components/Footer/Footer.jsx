import React from 'react';
import { Link } from 'react-scroll';

import Git from "../../Images/iconmonstr-github-3-240.png";
import LinkedIn from "../../Images/iconmonstr-linkedin-3-48.png";
import Email from "../../Images/iconmonstr-email-11-240.png";
import Phone from "../../Images/iconmonstr-phone-8-64.png";
import Location from "../../Images/iconmonstr-location-1-32.png";

import "./Footer.css"

function Footer() {
  return (
    <footer class=" text-center text-white" style={{ backgroundColor: '#152231' }}>
    <div class="container p-4 pb-0" style={{ backgroundColor: '#152231' }}>
      <section class="mb-4" style={{ backgroundColor: '#152231' }}>
        <a class="btn btn-line-light btn-lg m-1" href="#!" role="button" >
          <img src={Phone} alt="logoPhone" /><li>+543434651573</li>
        </a>
        <a class="btn btn-line-light btn-lg m-1" href='https://github.com/mauriruf32' role="button">
          <img src={Git} alt="logoGit" /><li>/mauriruf32 </li>
        </a>
        <a class="btn btn-line-light btn-lg m-1"  href="contact" role="button">     
          <Link to="contact" className='text-white' smooth={true} duration={500}>
          <img src={Email} alt="logoGmail" /> <li>Email Me</li></Link>
        </a>
        <a class="btn btn-line-light btn-lg m-1" href='https://www.linkedin.com/in/mauricio-fabro/' role="button" >
          <img src={LinkedIn} alt="logoIn" /> <li>/mauricio-fabro</li>
        </a>
        <a class="btn btn-line-light btn-lg m-1" href="#!" role="button">
          <img src={Location} alt="logoLocation" /><li>Paraná, Argentina</li>
        </a>
          
      </section>
    </div>
  
    <div class="text-center p-3" style={{ backgroundColor: '#152231' }}>
      © 2024 Copyright:
      <a class="text-white p-3" href="https://mauriciofabro.vercel.app/">Mauri's Web</a>
    </div>
  </footer>
  )
}

export default Footer;