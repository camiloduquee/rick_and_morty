import { useState } from "react";
import styles from "./SearchBar.module.css";
//import icons
import IconAdd from "../../Asset/icons/IconoAdd";
import IconoAleat from "../../Asset/icons/IconoAleat";
import SalirAlt from "../../Asset/icons/SalirAl";

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");
  const handleInputChange = (event) => {
    setCharacter(event.target.value);
  };
  return (
    <>
      <input
        className={styles.input}
        type="text"
        onChange={handleInputChange}
      />
      <button
        className={styles.button}
        onClick={() => props.onSearch(character)}
      >
        {" "}
        <IconAdd />
      </button>
      <button
        className={styles.button}
        onClick={props.random}
        title={"Carta Aleatoria"}
      >
        <IconoAleat />
      </button>
    </>
  );
}
