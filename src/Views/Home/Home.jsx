import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
// import HomeImage from "../../Images/Inicio.jpg"
import CV from './CV Mauricio Fabro 2023_Spanish.pdf';

import './Home.css';

function Home() {

  const handleDownload = () => {
    window.open(CV);
  };

  const [t, i18n] = useTranslation("global");

  return (
    <section className='home'>
    <div className='container1'>
       <div className='textHome'>
          <h1>{t(`home.welcome`)}</h1>
          <h2>{t(`home.presentation`)}</h2>
          <Button onClick={handleDownload} className='button'>Descargar CV</Button>
        </div>
    </div>
    </section>
  );
}

export default Home;
