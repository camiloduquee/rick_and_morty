import React from "react";
import Star from "../Star/Star";
import styles from '../Proyectos/proyectos.module.css';
const Proyectos = () => {
  return (
    <>
      <div className={styles.center}>
        <h1>Nuevo proyecto</h1>
      </div>
      <Star />
    </>
  );
};
export default Proyectos;
