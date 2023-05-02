import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
// Import de component
import Nav from "./components/Nav/Nav";
import Error from "./components/Error/Error";
//Import view
import About from "./View/About.jsx";
import Home from "./View/Home.jsx";
import Detail from "./View/Detail.jsx";
function App() {
  const [characters, setCharacters] = useState([]);

  const onClose = (id) => {
    setCharacters(characters.filter((Element) => Element.id !== id));
  };

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((Element) => Element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje repetido, Prueba otro ID.");
        } else {
          window.alert("No hay personaje con ese ID");
        }
      });
  };
  const random = () => {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  };
  return (
    <div>
      <Nav onSearch={onSearch} random={random} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
