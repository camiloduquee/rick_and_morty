import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={styles.container}>
      {characters.length === 0 ? (
        <p className={styles.parrafo}>¡Busca un personaje!</p>
      ) : (
        characters.map((character, index) => {
          return (
            <Card
              key={index}
              id={character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              origin={character.origin}
              image={character.image}
              onClose={() => props.onClose(character.id)}
            />
          );
        })
      )}
    </div>
  );
}
