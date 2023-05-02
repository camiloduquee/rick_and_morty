import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  const detailId = props.id;
  return (
    <div className={styles.box}>
      <img clasName={styles.img} src={props.image} alt="" />
      <button className={styles.button} onClick={props.onClose}>
        X
      </button>
      <Link to={`/detail/${detailId}`}>
        <h2 className={styles.name}>{props.name}</h2>
      </Link>
      <h2 className={styles.name}>{props.species}</h2>
      <h2 className={styles.name}>{props.gender}</h2>
    </div>
  );
}
