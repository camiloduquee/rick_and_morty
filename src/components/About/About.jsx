import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./About.module.css";
import ContainerPe from "../ContenedorPepinillo/ContainerPe";

function About() {
  const navigate = useNavigate();

  function backToHome() {
    navigate("/home");
  }
  return (
    <div>
      <ContainerPe />
      <div className={style.loginBox}>
        <h1>About</h1>
        <p>
          "Las metas son el resultado final de una larga y dura lucha que se
          forma con el fruto de todos los esfuerzos”.
          <br />
          <br /> Hermann J. Steinherr
        </p>
        <h2>Diseñado por </h2>
        <h3 className={style.autor}>Héctor Gómez</h3>
      </div>
    </div>
  );
}
export default About;
