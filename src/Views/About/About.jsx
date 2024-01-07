import React from 'react';

import Image from "../../Images/mauri.jpeg"

import "./About.css";
import { useTranslation } from 'react-i18next';

const About = () => {

  const [ t ] = useTranslation("global")

  return (
    <section className="about">
      <div className="backIm"> 
      </div>
      <div className="container">  
      
      <div className='textAbout'> 
    <img className="imageAbout" src={Image} alt="img_about"/>

      <h2>{t("about.about_title")}</h2>
      <p>{t("about.about")}</p>
    </div>
    </div>
    </section>
  );
}

export default About;

