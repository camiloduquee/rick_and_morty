import './App.css';
import About from './components/About/About';
import Error from './components/Error/Error';
import Detail from './components/Detail/Detail.jsx' ;
import Cards from './components/CardsComp/Cards';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form.jsx';
import { Route,Routes } from 'react-router-dom';
import { useState } from 'react';


function App () {
  const [characters, setCharacters] = useState([]);

    function onClose(id){
        setCharacters(characters.filter((Element) => Element.id !== id));
      }
      function onSearch(character) {
        fetch(`https://rickandmortyapi.com/api/character/${character}`)
          .then((response) => response.json())
          .then((data) => {
              if (data.name) {
                characters.find((Element) => Element.id === data.id) ===undefined
                ? setCharacters((characters) => [...characters, data])
                : alert('Personaje repetido, Prueba otro ID.');
              } else {
                window.alert('No hay personajes con ese ID');
              }
          });
      }
      function random() {
        let randomId = Math.floor(Math.random() * 826);
        onSearch(randomId);
      }

  return (
    <div className='App'>
      <Nav onSearch={onSearch} random={random} />
        <Routes>
            <Route exact path='/' element={<Form />}></Route>
            <Route exact path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/detail/:detailId' element={<Detail />} />
            <Route path='*' element={<Error />}></Route>
        </Routes>
      
    </div>
  );
}
export default App;