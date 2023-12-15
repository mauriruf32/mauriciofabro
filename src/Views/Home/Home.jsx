import React from 'react';
import './Home.css';
import CV from './CV Mauricio Fabro 2023_Spanish.pdf'; 
import { Button } from 'react-bootstrap';

function Home() {

  const handleDownload = () => {
    window.open(CV);
  };

  return (
    <section>
      <div className='container2'>
        <span className="d-inline fs-1">
          <h2>
            Hola! Me llamo Mauricio Fabro 
          </h2>
          <span className="font-weight-bold">
            Soy Desarrollador Full Stack 
          </span>
        </span>
        <Button onClick={handleDownload}>Descargar PDF</Button>
      </div>
    </section>
  );
}

export default Home;
