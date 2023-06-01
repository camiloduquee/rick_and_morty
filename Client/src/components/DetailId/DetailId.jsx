import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Jar from "../Jar/Jar";


const DetailId = () => {
  const [character, setCharacter] = useState({});
  const { detailId } = useParams();
  

  //Este código es el que buscará al personaje de la API cada vez que el componente se monte. Y luego, cada vez que se desmonte, borrará su información.

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
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
    <>
      <Jar character={character} />
    </>
  );
};
export default DetailId;
