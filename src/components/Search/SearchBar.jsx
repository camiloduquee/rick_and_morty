import style from "./SearchBar.module.css";
import { useState } from "react";
import SalirAlt from "../assets/icons/SalirAl";
import IconoAleat from '../assets/icons/IconoAleat';
import { useNavigate } from "react-router-dom";
import IconAdd from '../assets/icons/IconoAdd';

function SearchBar(props) {
  const [character, setCharacter] = useState(0);
  const navigate = useNavigate();

  const handleSearch = (evento) => {
    let { value } = evento.target;
    setCharacter(value);
  };
  const handleLogout = (evento) => {
   props.setAccess(false);
   navigate("/");
  }

  return (
    <div className={style.contenedor}>
      <input className={style.input} type="number" name="search" onChange={handleSearch} />
      <button
        className={style.button}
        onClick={() => props.onSearch(character)} title={'Agregar'}
      >
      <IconAdd />
      </button>
      <button className={style.button} onClick={props.random} title={'Carta Aleatoria'}><IconoAleat /></button>
      <button className={style.button} onClick={handleLogout} title={'Cerrar Sección'}><SalirAlt /></button>
    </div>
  );
}
export default SearchBar;
