import React from 'react';
import { Button } from 'react-bootstrap';

// import HomeImage from "../../Images/Inicio.jpg"
import CV from './CV Mauricio Fabro 2023_Spanish.pdf';

import './Home.css';

function Home() {

  const handleDownload = () => {
    window.open(CV);
  };

  return (
    <section className='home'>
    <div className='container1'>
       <div className='textHome'>
          <h1>Hola! Me llamo Mauricio Fabro</h1>
          <h2>Soy Desarrollador Full-Stack</h2>
          <Button onClick={handleDownload} className='button'>Descargar CV</Button>

        </div>
    </div>
    </section>
  );
}

export default Home;
