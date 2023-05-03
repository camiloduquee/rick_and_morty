import "./App.css";
import { Routes, Route, useLocation} from "react-router-dom";
import { useState,useEffect } from "react";
// Import de component
import Nav from "./components/Nav/Nav";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
//Import view
import About from "./View/About.jsx";
import Home from "./View/Home.jsx";
import Detail from "./View/Detail.jsx";
//acesso
import { useNavigate } from "react-router-dom";

function App() {
  // ----------- accesso
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const username = "camiloduquee@gmail.com";
  const password = "password123";
  
  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/");
    }
  };
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

// Fin de codigo de acceso

  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  
  
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
      {location.pathname !== "/" && <Nav onSearch={onSearch} random={random} />}
      <Routes>
        <Route path="/" element={<Form login={login}/>} />
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
