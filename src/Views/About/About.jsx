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
    <img className="imageAbout" src={Image} alt="img_about"/>

      <h2 className='h2'>{t("about.about_title")}</h2>

      <div className='textAbout'>

      <p>{t("about.about")}</p>
    </div>
    </div>
    </section>
  );
}

export default About;

