import React from 'react';
import HTML from '../../Images/html.d20c9482.png';
import CSS from '../../Images/css.4040bdba.png';
import REACT from '../../Images/react.e00184ba.png';
import JS from '../../Images/javascript.d04a05c4.png';
import NODE from "../../Images/node.f467a70a.png";
import POSTGRES from "../../Images/postgres.8e58ad2c.png";
import GIT from "../../Images/giT.png";
import "./Skills.css"; // Import your CSS file

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div id='skills' className='w-full md:w-[90%] min-h-screen mx-auto flex bg-slate-100 dark:bg-[#0a192f] text-[#0a192f] dark:text-gray-300'>
        <div className='max-w-[750px] m-auto py-4 px-5 flex flex-col justify-center w-full h-full'>
          <div className='w-full grid skills-grid' data-aos="fade-in">
            <div className='skill-item'>
              <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
              <p className='mt-4'>HTML</p>
            </div>
            <div className='skill-item'>
              <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
              <p className='mt-4'>CSS</p>
            </div>
            <div className='skill-item'>
              <img className='w-20 mx-auto' src={JS} alt="JavaScript icon" />
              <p className='mt-4'>JAVASCRIPT</p>
            </div>
            <div className='skill-item'>
              <img className='w-20 mx-auto' src={REACT} alt="React icon" />
              <p className='mt-4'>REACT</p>
            </div>
            <div className='skill-item'>
              <img className='w-20 mx-auto' src={GIT} alt="GIT icon" />
              <p className='mt-4'>GIT</p>
            </div>
            <div className='skill-item'>
              <img className='w-20 mx-auto' src={NODE} alt="Node.js icon" />
              <p className='mt-4'>NODE JS</p>
            </div>
            <div className='skill-item'>
              <img className='w-20 mx-auto' src={POSTGRES} alt="PostgreSQL icon" />
              <p className='mt-4'>POSTGRESQL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;