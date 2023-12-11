import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import './Home.css';
import CV from './CVMauricioFabro.pdf'; 

function Home() {

  const handleDownload = () => {
    window.open(CV);
  };

  return (
    <section>
      <NavBar />
      <div className='container2'>
      <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
      Hola! Me llamo Mauricio Fabro 
      </h2>
        <span class="font-weight-bold">
        Soy Desarrollador Full Stack 
        </span> 
        <button onClick={handleDownload}>Descargar PDF</button>
      </div>
    </section>
  );
}

export default Home;
