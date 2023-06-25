import stylesCard from "../Card/Card.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "../../Redux/actions";
import { BsFillTrashFill } from "react-icons/bs";

const Favorites = (props) => {
  const detailId = props.id;
  const accesskey = useSelector((state) => state.accesskey);
  const dispatch = useDispatch();
  const handleFavoriteDelete = () => {
    const id = detailId;

    dispatch(deleteFavorite({ id, accesskey }));
  };
  return (
    <>
      <div className={stylesCard.grid}>
      
          <button
            onClick={handleFavoriteDelete}
            title={"delete all favorites"}
            className={stylesCard.buttonDell}
          >
            <BsFillTrashFill />
          </button>
        
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
