import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';

function App () {
  
  const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 };

  const [characters, setCharacters] = useState();

  return (
    <div className='App'>
        <Nav/>
        <Cards characters={characters}/>

    </div>
  );
}

export default App;
