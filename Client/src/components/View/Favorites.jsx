import React from "react";
import { useSelector } from "react-redux";
import Fav from "../Fav/Fav.jsx";
import styles from "../Fav/Fav.module.css";
import Star from "../Star/Star.jsx";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../Redux/actions.js";

const Favorites = () => {
  const favorite = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };
  return (
    <>
      <div className={styles.center}>
        <select name="select" onChange={handleOrder} className={styles.contentSelect} >
          <option disabled>-- Select --</option>
          <option value="Ascendiente">Ascendente</option>
          <option value="Descendiente">Descendente</option>
        </select>
        <select onChange={handleFilter} className={styles.contentSelect}>
          <option disabled>-- Select --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={styles.box}>
        {favorite.map((fav) => {
          return (
            <Fav
              key={fav.id}
              name={fav.name}
              species={fav.species}
              gender={fav.gender}
              image={fav.image}
              id={fav.id}
            />
          );
        })}
      </div>
      <Star />
    </>
  );
};
export default Favorites;