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
  // // const pokemonQuery = req.query.q;
  // const pokemonQuery = req.params.pokemonName;
  // // const foundPokemon = pokemons.find((pokemon) => pokemon.name === pokemonQuery)
  // let foundPokemon = null;
  
  // for (let pokemon of pokemons) {
  //   if (pokemon.name === pokemonQuery) {
  //     console.log(pokemon)
  //     foundPokemon = pokemon
  //   }
  // } 
  // if (!foundPokemon) {
  //   return res.status(404).send("No pokemon found!");
  // }

  // res.send(foundPokemon);
  
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
  res.send('Food is the best');
});

module.exports = router; // <== Look at our new friend, module.exports!