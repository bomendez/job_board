import { useState } from 'react';
import axios, { Axios } from 'axios';

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


    axios.get('http://localhost:8000/api/pokemon/find/' + formInput)
      .then(response => setPokemon(response.data))
      .catch(error => setPokemon({
        name: "No matching jobs found",
        health: null, 
      }));
    console.log("hello, there");

    // doSomething();
  }

  return (
    <div>
      {errorMsg}
      <input type='text' value={formInput}
      onChange={(e) => {
        setError(null);
        setFormInput(e.target.value)
      
      }} />
      <button onClick={onSearchButtonClick}>
        Search Jobs
      </button>
      <div>
        Job Title: {pokemon.title}
      </div>
      <div>
        Description: {pokemon.description}
      </div>

    </div>
 
  );
}

export default App;
