import style from "./card.module.css";
import { Link } from "react-router-dom";
export default function Card(props) {
   
   return (
      <div className={style.contenedor}>
         <div className={style.contButon}>
            <button onClick={props.onClose}>X</button>
         </div>     
         <Link to={`/detail/${props.id}`} > 
            <h2 className={style.titleCard}>{props.name}</h2>
         </Link>   
         <div className={style.contenedorHuman}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
            
         <img  src={props.image} alt="" /> 
      </div>
   );
}
