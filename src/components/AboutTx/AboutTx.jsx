import React from "react";
import stylesJar from "../Jar/Jar.module.css";
import styles from "./AboutTx.module.css";
import { useNavigate } from "react-router-dom";
const AboutTx = () => {
    const navigate = useNavigate();
    const backToTheHome = () => {
        navigate('/home');
    }
  return (
    <>
      <div className={stylesJar.center}>
        {/*---------- Jar -------------*/}

        <div className={stylesJar.envase}>
          <div className={stylesJar.positionState}>
            <div className={stylesJar.capaOne} />
            <div className={stylesJar.tapa} />
            <div className={stylesJar.particlesEnvase} />
            <div className={stylesJar.reflex} />
            <div className={stylesJar.centerGrid}>
              {/*----------- Detail ------------- */}

              <div className={styles.BoxGrid}>
                <div className={styles.title}>
                    <h1>About</h1>
                </div>
                <div className={styles.text}>
                  <p>
                    Soy un joven apasionado por la tecnología que decidió
                    estudiar programación full stack para adquirir nuevas habilidades
                    en diferentes lenguajes de programación, bases de datos y
                    herramientas de desarrollo web. A lo largo de mi formación,
                    he aprendido a desarrollar aplicaciones web utilizando HTML,
                    CSS y JavaScript para el frontend, y Node.js  para
                    el backend. Además, he profundizado en frameworks como React
                    , lo que me permite desarrollar aplicaciones web
                    altamente interactivas y dinámicas.
                </p>
                </div>
                <div className={styles.text}>
                  <p>
                    Pero lo que realmente destaca es mi pasión por el
                    aprendizaje constante y la innovación. Siempre estoy en busca
                    de nuevos desafíos y de adquirir nuevas habilidades para
                    mejorar mis proyectos y ofrecer soluciones más completas a
                    los clientes.
                  </p>
                </div>
                <button className={styles.button} onClick={backToTheHome}>Home</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutTx;
