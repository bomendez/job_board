import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios, { Axios } from 'axios';

function App() {
  const [formInput, setFormInput] = useState('');
  const [pokemon, setPokemon] = useState({
    name: 'No pokemon selected', health: -1,
  })

  function onSearchButtonClick() {
    // const pokemon = axios.get('...')
    // console.log(pokemon);

    axios.get('http://localhost:8000/api/pokemon/find/pikachu')
      .then(response => setPokemon(response.data))
      .catch(error => console.warn("error"));
    console.log("hello, there");
  }

  return (
    <div>
      <input type='text' value={formInput}
      onChange={(e) => setFormInput(e.target.value)} />
      <button onClick={onSearchButtonClick}>
        Search for Pokemon
        </button>
      <div>
        Pokemon Name: {pokemon.name}
      </div>
      <div>
        Pokemon Health: {pokemon.health}
      </div>

    </div>
 
  );
}

export default App;
