import { useTranslation } from 'react-i18next';
import React from 'react';

import Countries1 from "../../Images/loading.png";
import Countries2 from "../../Images/home.png";
import Print1 from "../../Images/Print1.png";
import HTML from '../../Images/html.d20c9482.png';
import CSS from '../../Images/css.4040bdba.png';
import REACT from '../../Images/react.e00184ba.png';
import JS from '../../Images/javascript.d04a05c4.png';
import NODE from "../../Images/node.f467a70a.png";
import REDUX from "../../Images/redux.png";
import POS from "../../Images/postgres.8e58ad2c.png";
import PROGRESS from "../../Images/In Progress.gif";


import "./Proyects.css";

const Projects = () => {

  const [ t ] = useTranslation("global");

  const projectData = [
    {
      title: "Countries App",
      description: <p>{t("projects.projects_countries")}</p>,
      image: Countries1, Countries2,
      enlace: "https://countries-app-theta-gilt.vercel.app/",
    },
    {
      title: "PrintCraft3D",
      description: <p>{t("projects.projects_print")}</p>,
      image: Print1,
      enlace: "https://printcraft3d.vercel.app/",
    },
    {
      title: "E-commerce",
      description: <p>{t("projects.projects_awa")}</p>,
      image: PROGRESS,
      enlace: "...",
    },
  ];

  return (
    <section className="projects">
      <div className='container'>
        <h1 className='h2'>{t("projects.projects_title")}</h1>
        <br />
        {projectData.map((project, index) => (
          <div key={index} className="card mb-3 text-white" style={{ backgroundColor: 'transparent' }}>
            <div className="row no-gutter" style={{ backgroundColor: 'transparent' }}>
              <div className="col-md-4">
                <img src={project.image} className="card-img" alt={`Thumbnail ${index}`} class="img-thumbnail" />
              </div>
              <div className="col-md-8" style={{ backgroundColor: 'transparent' }}>
                <div className="card-body" >
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p className="card-text text-white">
                    <small>{t("projects.projects_skills")}</small>
                  </p>
                  <img className='Skills ' src={REACT} alt="" />
                  <img className='Skills' src={JS} alt="" />
                  <img className='Skills' src={HTML} alt="" />
                  <img className='Skills' src={CSS} alt="" />
                  <img className='Skills' src={NODE} alt="" />
                  <img className='Skills' src={REDUX} alt="" />
                  <img className='Skills' src={POS} alt="" />
                </div>
      <button className='button3 text-white' type="button"> <a href={project.enlace}  target='_blank' rel="noreferrer" >{t("buttons.buttons_project")}</a></button>

               
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
