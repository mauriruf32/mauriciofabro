import React from 'react'

import Image from "../../Images/mauri.jpeg"

import "./About.css";

function About() {
  return (
    <section>
    <div className='container3'>
    <img
          className='imageAbout'
      src={Image}
      alt="img_about"
          />
    <p class="text-left"> ¡Hola! Soy Mauricio, recién graduado del bootcamp de SoyHenry y apasionado por la *programación Full-Stack.* 
    Durante mi formación, he adquirido habilidades sólidas en tecnologías como *JavaScript, HTML, CSS, Redux, React, Node JS, SQL, Sequelize, entre otras.*
    Mi enfoque proactivo y mi deseo constante de aprender me llevan a explorar nuevas tecnologías y enfoques en el desarrollo web.
    Me considero un solucionador de problemas creativo, siempre en busca de alternativas innovadoras para enfrentar los desafíos que surgen en el camino.
    La colaboración es una de mis fortalezas, disfruto trabajando en equipo, y creo en la importancia de la comunicación y la colaboración en el desarrollo de proyectos exitosos.
    Estoy emocionado por iniciar mi carrera como Desarrollador Full-Stack y ansioso por contribuir con mi pasión y habilidades a proyectos innovadores. Estoy listo para enfrentar nuevos retos y continuar creciendo en este campo. 
    *¡Con ganas de sumarme a un equipo y comenzar esta emocionante etapa profesional!*</p>
    <div className='textAbout'>
    </div>
    </div>
  </section>
  )
}

export default About;