import React from "react";
import SearchBar from "../Search/SearchBar.jsx";
import style from "./Nav.module.css"
import { Link } from "react-router-dom";

function Nav(props) {     
    return(
        <div className={style.contenedor}>
            <nav className={style.navegacion}>
                <Link to={'/home'} className={style.navA} >Home</Link>
                <Link to={'/about'} className={style.navA} >About</Link>
            </nav>
            <div className={style.SearchBar}>
                <SearchBar onSearch={props.onSearch} random={props.random} setAccess={props.setAccess}/>
            </div>  
        </div>
    );
}
export default Nav; 

