import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import style from "./detail.module.css";

function Detail() {
  const { detailId } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({
    name: "",
    status: "",
    specie: "",
    gender: "",
    origin: "",
    image: "",
  });
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter({
            name: char.name,
            status: char.status,
            specie: char.specie,
            gender: char.gender,
            origin: char.origin.name,
            image: char.image,
          });
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.box}>
      <div className={style.container}>
        <button className={style.boton} onClick={() => navigate("/home")}>
          X
        </button>
        <div className={style.containerTwo}>
          <h1 className={style.nombre} >Nombre: {character.name}</h1>
          {character.status && <p className={style.parrafo}>Status: {character.status} </p>}
          {character.specie && <p className={style.parrafo}>Especie: {character.specie} </p>}
          {character.gender && <p className={style.parrafo}>Genero: {character.gender} </p>}
          {character.origin && <p className={style.parrafo}>Origen: {character.origin} </p>}
        </div>
        <img className={style.imagen} src={character.image} />
      </div>
    </div>
  );
}
export default Detail;
