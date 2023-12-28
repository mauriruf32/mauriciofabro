import React from 'react';
import { Button } from 'react-bootstrap';

import Countries1 from "../../Images/loading.png";
import Countries2 from "../../Images/home.png";
import Print1 from "../../Images/Print1.png";
import HTML from '../../Images/html.d20c9482.png';
import CSS from '../../Images/css.4040bdba.png';
import REACT from '../../Images/react.e00184ba.png';
import JS from '../../Images/javascript.d04a05c4.png';
import NODE from "../../Images/node.f467a70a.png";
import REDUX from "../../Images/redux.png";


import "./Proyects.css";

const Projects = () => {
  const projectData = [
    {
      title: "Countries App",
      description: "El objetivo fue construir una Single Page Application (SPA) para explorar información y detalles de diversos países, utilizando tecnologías como: React, Redux, Node, CSS, Express, Sequelize. Ademas se usaron recursos como controladores de versiones (Git y Github).",
      image: Countries1, Countries2,
      enlace: "https://countries-app-theta-gilt.vercel.app/",
    },
    {
      title: "PrintCraft3D",
      description: "Para este proyecto (grupal) nos propusimos realizar una ecommerce para la venta de articulos impresos con impresoras 3D. Se implementaron tecnologías como JavaScript, React.js, Redux.js, Node.js, CSS, etc.",
      image: Print1,
      enlace: "https://printcraft3d.vercel.app/",
    },
  ];

  return (
    <section className="projects">
      <div className='container'>
        <h2>Proyectos</h2>
        {projectData.map((project, index) => (
          <div key={index} className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={project.image} className="card-img" alt={`Thumbnail ${index}`} />
              </div>
              <div className="col-md-8" style={{ backgroundColor: '#30404d' }}>
                <div className="card-body" >
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p className="card-text">
                    <small>Tecnologias</small>
                  </p>
                  <img className='Skills' src={REACT} alt="" />
                  <img className='Skills' src={JS} alt="" />
                  <img className='Skills' src={HTML} alt="" />
                  <img className='Skills' src={CSS} alt="" />
                  <img className='Skills' src={NODE} alt="" />
                  <img className='Skills' src={REDUX} alt="" />
                </div>
                <Button><a href={project.enlace} target='_blank' rel="noreferrer" >IR</a></Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
