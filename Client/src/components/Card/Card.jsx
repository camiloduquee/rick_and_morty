import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../../Redux/actions";
import { useState, useEffect } from "react";

export function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const detailId = props.id;
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorite(props.id);
    } else {
      setIsFav(true);
      
      props.addFavorite(props);
    }
  };
  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <div>
      <div className={styles.grid}>
        <div className={styles.effectBox}></div>
        <img className={styles.image} src={props.image} alt="" />
        <div className={styles.species}>
          <p>{props.species}</p>
        </div>
        <div className={styles.gender}>
          <p>{props.gender}</p>
        </div>
        {isFav ? (
          <button className={styles.buttonActive} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={styles.buttonDesactive} onClick={handleFavorite}>
            🤍
          </button>
        )}

        <button className={styles.button} onClick={props.onClose}>
          X
        </button>

        <div className={styles.title}>
          <Link to={`/detail/${detailId}`} className={styles.noneTitle}>
            <h2>{props.name}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (id) => dispatch(addFavorite(id)),
    deleteFavorite: (id) => dispatch(deleteFavorite(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
