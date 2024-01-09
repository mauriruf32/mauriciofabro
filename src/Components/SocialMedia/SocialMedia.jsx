import React from 'react';
import Git from "../../Images/iconmonstr-github-3-240.png";
import Gmail from "../../Images/iconmonstr-email-11-240.png";
import Phone from "../../Images/iconmonstr-phone-8-64.png";
import LinkedIn from "../../Images/iconmonstr-linkedin-3-48.png";
import Location from "../../Images/iconmonstr-location-1-32.png";

import "./SocialMedia.css"

export const SocialMedia = () => {
  return (
    <div className='containerSocial'>
      <li>
        <img src={Phone} alt="logoPhone" />
        +543434651573
      </li>
      <br />
      <li>
        <img src={Gmail} alt="logoGmail" />
        mauriruffini32@gmail.com
      </li>
      <li>
        <br />
        <img src={Git} alt="logoGit" />
        <a href='https://github.com/mauriruf32' target='_blank' rel='noopener noreferrer'>
          mauriruf32
        </a>
      </li>
      <br />
      <li>
        <img src={LinkedIn} alt="logoIn" />
        <a href='https://www.linkedin.com/in/mauricio-fabro/' target='_blank' rel='noopener noreferrer'>
          mauricio-fabro
        </a>
      </li>
      <br />
      <li>
        <img src={Location} alt="logoLocation" />
        Paraná - Argentina
      </li>
    </div>
  )
}
