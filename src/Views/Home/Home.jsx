import React from 'react';
import { useTranslation } from 'react-i18next';

import CV from './CV Mauricio Fabro 2024_Spanish.pdf';

import './Home.css';

function Home() {

  const handleDownload = () => {
    window.open(CV);
  };

  const [ t ] = useTranslation("global");

  return (
    <section className='home'>
    <div className='container1'>
       <div className='textHome'>
          <h1>{t(`home.welcome`)}</h1>
          <h2>{t(`home.presentation`)}</h2>

          <button className='botton' onClick={handleDownload} >Descargar CV</button>
        </div>
    </div>
    </section>
  );
}

export default Home;
