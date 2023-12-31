import React from 'react';

import Image from "../../Images/mauri.jpeg"

import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="backIm"> 
      </div>
    <img className="imageAbout" src={Image} alt="img_about"/>
      <div className="container">  
      <div className='textAbout'> 
      <h2>Sobre Mi</h2>
      <p>¡Hola! Soy Mauricio, recién graduado del bootcamp de SoyHenry y apasionado por la programación Full-Stack.
    Mi enfoque proactivo y mi deseo constante de aprender me llevan a explorar nuevas tecnologías y enfoques en el desarrollo web.
    Me considero un solucionador de problemas creativo, siempre en busca de alternativas innovadoras para enfrentar los desafíos que surgen en el camino.
    La colaboración es una de mis fortalezas, disfruto trabajando en equipo, y creo en la importancia de la comunicación y la colaboración en el desarrollo de proyectos exitosos.
    Estoy emocionado por iniciar mi carrera como Desarrollador Full-Stack y ansioso por contribuir con mi pasión y habilidades a proyectos innovadores. Estoy listo para enfrentar nuevos retos y continuar creciendo en este campo. 
    ¡Con ganas de sumarme a un equipo y comenzar esta emocionante etapa profesional!</p>
    </div>
    </div>
    </section>
  );
}

export default About;

