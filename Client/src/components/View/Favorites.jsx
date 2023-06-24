import stylesCard from "../Card/Card.module.css";
import { Link } from "react-router-dom";

const Favorites = (props) => {
  const detailId = props.id;
  return (
    <>
      <div className={stylesCard.grid}>
        <div className={stylesCard.effectBox}></div>
        <img className={stylesCard.image} src={props.image} alt="" />
        <div className={stylesCard.species}>
          <p>{props.origin}</p>
        </div>
        <div className={stylesCard.gender}>
          <p>{props.gender}</p>
        </div>
        <div className={stylesCard.title}>
          <Link to={`/detail/${detailId}`} className={stylesCard.noneTitle}>
            <h2>{props.name}</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Favorites;