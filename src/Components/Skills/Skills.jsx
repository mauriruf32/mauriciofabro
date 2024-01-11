import React from 'react';
import HTML from '../../Images/html.d20c9482.png';
import CSS from '../../Images/css.4040bdba.png';
import REACT from '../../Images/react.e00184ba.png';
import JS from '../../Images/javascript.d04a05c4.png';
import NODE from "../../Images/node.f467a70a.png";
import POSTGRES from "../../Images/postgres.8e58ad2c.png";
import GIT from "../../Images/giT.png";
import REDUX from "../../Images/redux2.png"
import "./Skills.css";

function Skills() {
  return (
    <section className="skills">
         <h2 className='h2 text-white'>Skills</h2>
     <div className='skills_container'>
  <div class="cols">
			<div class="col">
				<div class="container_S">
					<div class="front" >
						<div class="inner">
              <span><img className='img' src={HTML} alt="" /></span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
              <p>HTML</p>
						</div>
					</div>
				</div>

				<div class="container_S">
					<div class="front" >
						<div class="inner">
              <img className='img' src={JS} alt="" />
						</div>
					</div>
					<div class="back">
						<div class="inner">
            <p>JavaScript</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="container_S">
					<div class="front" >
						<div class="inner">
              <span><img className='img' src={CSS} alt="" /></span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
              <p>CSS</p>
						</div>
					</div>
				</div>

				<div class="container_S">
					<div class="front" >
						<div class="inner">
              <span><img className='img' src={NODE} alt="" /></span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
              <p>NODE.JS</p>
						</div>
					</div>
				</div>
			</div>

			<div class="col">
				<div class="container_S">
					<div class="front" >
						<div class="inner">
              <span><img className='img' src={REACT} alt="" /></span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>REACT</p>
						</div>
					</div>
				</div>

				<div class="container_S">
					<div class="front" >
						<div class="inner">
              <span><img className='img' src={POSTGRES} alt="" /></span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>POSTGRES</p>
						</div>
					</div>
				</div>
			</div>
      <div class="col" >
				<div class="container_S">
					<div class="front" >
						<div class="inner">
              <span><img className='img' src={GIT} alt="" /></span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>GIT</p>
						</div>
					</div>
				</div>

				<div class="container_S">
					<div class="front" >
						<div class="inner">
              <span><img className='img' src={REDUX} alt="" /></span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
            <p>REDUX</p>
          </div>
					</div>
				</div>
			</div>
		</div>
 </div>
    </section>
  );
}

export default Skills;

