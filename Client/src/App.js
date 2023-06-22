import styles from "./App.module.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// Import de component
import Nav from "./components/Nav/Nav";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
//Import view
import About from "./components/View/About.jsx";
import Home from "./components/View/Home.jsx";
import Detail from "./components/View/Detail.jsx";
import Favorites from "./components/View/Favorites.jsx";
import Proyectos from "./components/View/Proyectos.jsx";
//acesso
import { useNavigate } from "react-router-dom";
//axios
import axios from "axios";
//redux
import { useDispatch } from "react-redux";
import { deleteFavorite } from "./Redux/actions";
function App() {
  // ----------- accesso -----------//
  const dispatch = useDispatch();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  async function login(userData) {
    const { username, password } = userData;

    const endPoint = "http://localhost:3001/rickandmorty/login/";

    try {
      const { data } = await axios(
        `${endPoint}?email=${username}&password=${password}`
      );
      const { access } = data;
      if (access) {
        setAccess(data);
        access && navigate("/home");
      } else {
        throw "Error de usuario o contraseña";
      }
    } catch (error) {
      alert(error);
    }
  }

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // Fin de codigo de acceso

  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const onClose = (id) => {
    //  Borro un Personaje
    setCharacters(characters.filter((Element) => Element.id !== id));
    //Boro un personaje Favorito
    dispatch(deleteFavorite(id));
  };

  async function onSearch(character) {
    const { data } = await axios(
      `http://localhost:3001/rickandmorty/character/${character}`
    );

    try {
      characters.find((Element) => Element.id === data.id) === undefined
        ? setCharacters((characters) => [...characters, data])
        : alert("Personaje repetido, Prueba otro ID.");
    } catch (error) {
      window.alert(error.response.data);
    }
  }
  const random = () => {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  };
  return (
    <div
      className={location.pathname !== "/" ? styles.bodyForm : styles.bodyPage}
    >
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} random={random} logout={logout} />
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
