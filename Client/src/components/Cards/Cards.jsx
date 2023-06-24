import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;

  return (
    <>
      {!characters.length ? (
        <p className={`${styles.parrafo} ${styles.container}`}>
          ¡Busca un personaje!
        </p>
      ) : (
        <div className={styles.containerGrid}>
          {characters.map((character, index) => {
            return (
              <Card
                key={index}
                id={character.id}
                name={character.name}
                status={character.status}
                gender={character.gender}
                species={character.species}
                origin={character.origin}
                image={character.image}
                onClose={() => props.onClose(character.id)}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
