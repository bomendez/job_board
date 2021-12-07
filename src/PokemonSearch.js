import { useState } from 'react';
import axios, { Axios } from 'axios';
import './App.css';

function App() {
  const [formInput, setFormInput] = useState('');
  const [pokemon, setPokemon] = useState({
    name: 'No job selected', health: -1,
  })
  const [errorMsg, setError] = useState(null);

  function onSearchButtonClick() {
    
    if (!formInput) {
      setError("You must type in keyword.");
      return;
    }


    axios.get('http://localhost:8000/api/pokemon/title/' + formInput)
      .then(response => setPokemon(response.data))
      .catch(error => setPokemon({
        name: "No matching jobs found",
        health: null, 
      }));
    console.log("no match with given criteria");

    // doSomething();
  }

  return (
    <div>
      {errorMsg}
      <input class="form-control mr-sm-2" type="search" 
      placeholder="Search" aria-label="Search"  value={formInput}
      onChange={(e) => {
        setError(null);
        setFormInput(e.target.value)
      
      }} />
      <button class="btn btn-outline-success my-2 my-sm-0"
      onClick={onSearchButtonClick}>
        Search Jobs
      </button>
      {/* <div>
        Job Title: {pokemon.title}
      </div>
      <div>
        Description: {pokemon.description}
      </div> */}

    </div>
 
  );
}

export default App;
