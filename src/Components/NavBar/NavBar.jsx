import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={style.container}>
        Mauricio Fabro
        <Link to="/">Inicio</Link>
        <Link to="/proyects">Proyectos</Link>
        <Link to="/about">Sobre Mi</Link>
        <Link to="/contact">Contacto</Link>
</div>
  )
}

export default NavBar;