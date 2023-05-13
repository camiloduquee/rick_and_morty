import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
//import Icono
import SalirAl from "../../Asset/icons/SalirAl.jsx";

const Nav = (props) => {
  const location = useLocation();
  return (
    <div className={styles.contenedorOne}>
      <nav className={styles.navegacion}>
        <Link to="/home" className={styles.navA}>
          <div>Home</div>
        </Link>
        <Link to="/About" className={styles.navA}>
          <div>About</div>
        </Link>
        <Link to="/Favorites" className={styles.navA}>
        <div>Favorites</div>
        </Link>
        <Link to="/proyectos" className={styles.navA}>
          <div>Projects</div>
        </Link>
      </nav>
      <div className={styles.contenedorTwo}>
        {location.pathname === "/home" ? (
          <div className={styles.SearchBar}>
            <SearchBar onSearch={props.onSearch} random={props.random} />
            <button
              className={styles.button}
              onClick={props.logout}
              title={"Cerrar Sección"}
            >
              <SalirAl />
            </button>
          </div>
        ) : (
          <button
            className={styles.button}
            onClick={props.logout}
            title={"Cerrar Sección"}
          >
            <SalirAl />
          </button>
        )}
      </div>
    </div>
  );
};
export default Nav;
