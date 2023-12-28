import React from 'react';
import { Button } from 'react-bootstrap';

import HomeImage from "../../Images/Inicio.jpg"
import CV from './CV Mauricio Fabro 2023_Spanish.pdf';

import './Home.css';

function Home() {

  const handleDownload = () => {
    window.open(CV);
  };

  return (
    <section className='home'>
      <div className='textHome'>
              <div className=' backIM '>
    <img className='imageHome'  src={HomeImage} alt="img_home"/>

          <h2>Hola! Me llamo Mauricio Fabro</h2>
            Soy Desarrollador Full Stack
      </div>
      </div>

      <Button onClick={handleDownload} className='button'>Descargar PDF</Button>
    </section>
  );
}

export default Home;
