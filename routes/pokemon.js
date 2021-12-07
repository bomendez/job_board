const express = require('express');
const router = express.Router();
const PokemonAccessor = require('./models/Pokemon.Model');


// Returns all known jobs
router.get('/findAll', function(request, response) {
  return PokemonAccessor.getAllPokemon()
    .then(pokemonResponse => response.status(200).send(pokemonResponse))
    .catch(error => response.status(400).send(error))
})

router.get('/find/:pokemonId', function(request, response) {
  return PokemonAccessor.findPokemonById(request.params.pokemonId)
    .then(pokemonResponse => response.status(200).send(pokemonResponse))
    .catch(error => response.status(400).send(error))
});

router.get('/title/:title', function(request, response) {
  return PokemonAccessor.findPokemonByName(request.params.title)
    .then(pokemonResponse => response.status(200).send(pokemonResponse))
    .catch(error => response.status(400).send(error))
});

router.post('/create', (request, response) => {
  const {title, companyName, location, description, email} = request.body;
  if(!title || !companyName || !location || !description || !email) {
    return response.status(422).send("Missing data");
  }
  
  return PokemonAccessor.findPokemonByName(title)
    .then((pokemonResponse) => {
      if(pokemonResponse.length) {
        response.status(402).send("Job with that name already exists")
      } else {
        PokemonAccessor.insertPokemon(request.body)
          .then(pokemonResponse => response.status(200).send(pokemonResponse))
          .catch(error => response.status(400).send(error))
        
      }

    }
      
    
    )

  // pokemons.push({
  //   name: name,
  //   health: health,
  // })

  // response.send("Success!")

})

router.get('/about', function(req, res) {
  res.send('Job Board is a place to view and manage jobs');
});

module.exports = router; // <== Look at our new friend, module.exports!