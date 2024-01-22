import React from 'react';
import { useTranslation } from 'react-i18next';


import CV_Eng from './CV Mauricio Fabro 2024_English.pdf';
import CV_Spa from './CV Mauricio Fabro 2024_Spanish.pdf';

import './Home.css';

function Home() {
  const { i18n } = useTranslation("global");

  const handleDownload = () => {
    const cvToDownload = i18n.language === 'en' ? CV_Eng : CV_Spa;
    window.open(cvToDownload);
  };

  const [t] = useTranslation("global");

  return (
    <section className='home'>
      <div className='container1'>

        <div className='textHome'>
          <h1>{t(`home.welcome`)}</h1>
          <h2>{t(`home.presentation`)}</h2>
          <button className='botton' onClick={handleDownload}>{t(`buttons.buttons_home`)}</button>

        </div>
        
      </div>
      
    </section>
  );
}

export default Home;
