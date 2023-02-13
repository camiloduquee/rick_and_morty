import style from "./SearchBar.module.css";
import { useState } from "react";
import IconoSalir from '../'
function SearchBar(props) {
   const [character, setCharacter] = useState(0);

   const handleSearch = (evento)=>{
      let {value} = evento.target;
      setCharacter(value);
   };


   return (
      <>
         <input type='search' name='search' onChange={handleSearch}/>
         <button className={style.button} onClick={() => props.onSearch(character)}>Agregar</button>
         <button className={style.button} onClick={props.random}>A</button> 
      </>
   );
}
export default SearchBar;