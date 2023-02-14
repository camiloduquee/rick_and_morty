import "./App.css";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Detail from "./components/Detail/Detail.jsx";
import Cards from "./components/CardsComp/Cards";
import Nav from "./components/Nav/Nav";
import Form from "./components/Form/Form.jsx";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const username = "camiloduq@gmail.com";
  const password = "1password";

  function login(userData) {
    if (username === userData.username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Error de usuario o contraseña");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onClose(id) {
    setCharacters(characters.filter((Element) => Element.id !== id));
  }
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((Element) => Element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje repetido, Prueba otro ID.");
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  function random() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }
  
  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} random={random} setAccess={setAccess} />
      )}
      <Routes>
        <Route exact path="/" element={<Form login={login} />}></Route>
        <Route
          exact
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}
export default App;
