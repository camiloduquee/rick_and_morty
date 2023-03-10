import style from "./card.module.css";
import { Link } from "react-router-dom";
import * as actions from "../../redux/actions";
import { connect } from "react-redux";
import { useState,useEffect } from "react";

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = (id,favorite) => {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorite(id);
    } else {
      setIsFav(true);
      props.addFavorite(favorite);
    }
  }
//   console.log(props.myFavorites);

//   useEffect(() => {
//    props.myFavorites.forEach((fav) => {
//       if (fav.id === props.id) {
//          setIsFav(true);
//       }
//    });
// }, [props.myFavorites]);
  return (
    <div className={style.contenedor}>
      
      <div className={style.contButon}>
        <button onClick={props.onClose}>X</button>
        {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      </div>
      <Link to={`/detail/${props.id}`}>
        <h2 className={style.titleCard}>{props.name}</h2>
      </Link>
      <div className={style.contenedorHuman}>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>

      <img src={props.image} alt="" />
    </div>
  );
}
export const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (favorite) => dispatch(actions.addFavorite(favorite)),
    deleteFavorite: (id) => dispatch(actions.deleteFavorite(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
