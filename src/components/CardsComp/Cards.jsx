import Card from "../CardComp/Card.jsx";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={style.grid}>
      {characters.length === 0 ? (
        <div className={style.containerParrafo}>
          <p className={style.parrafo}>¡Busca un personaje!</p>
        </div>
      ) : (
        characters.map((elem, index) => (
          <Card
            id={elem.id}
            name={elem.name}
            species={elem.species}
            gender={elem.gender}
            image={elem.image}
            onClose={() => props.onClose(elem.id)}
            key={index}
          />
        ))
      )}
    </div>
  );
}
