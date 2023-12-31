import React from 'react';
import Henry from "../../Images/cetificadoHenry_page-0001.jpg";
import Domestika from "../../Images/certificateDomestika.jpg";
import EFSET from "../../Images/EFSET.jpg";

import "./Certifications.css"

const Certifications = () => {
  return (
    <section className='certifications'>
        <div className='general'> 
        <h2>Certificaciones</h2>
        <br />
      <div className='certi'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Henry} className="img-fluid" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={Domestika} className="img-fluid" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={EFSET} className="img-fluid" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev buttomNe" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden"></span>
          </button>
          <button className="carousel-control-next buttomPre" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden"></span>
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Certifications;
