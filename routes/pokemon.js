const { request } = require('express');
const express = require('express');
const auth_middleware = require('./auth_middleware');
const router = express.Router();
const PokemonAccessor = require('./models/Pokemon.Model');


// Returns all known jobs
router.get('/findAll', function(request, response) {
  return PokemonAccessor.getAllPokemon()
    .then(pokemonResponse => response.status(200).send(pokemonResponse))
    .catch(error => response.status(400).send(error))
})

router.get('/myJobs', auth_middleware, function(request, response){
  return PokemonAccessor.findJobByOwner(request.username)
    .then(pokemonResponse => response.status(200).send(pokemonResponse))
    .catch(error => response.status(400).send(error))
});

router.get('/find/:pokemonId', function(request, response) {
  console.log(request)
  return PokemonAccessor.findPokemonById(request.params.pokemonId)
    .then(pokemonResponse => response.status(200).send(pokemonResponse))
    .catch(error => response.status(400).send(error))
});

router.get('/title/:title', function(request, response) {
  return PokemonAccessor.findPokemonByName(request.params.title)
    .then(pokemonResponse => response.status(200).send(pokemonResponse))
    .catch(error => response.status(400).send(error))
});

router.get('/search/:searchQuery', function(request, response) {
  return PokemonAccessor.findJobByPartialName(request.params.searchQuery)
    .then(jobResponse => response.status(200).send(jobResponse))
    .catch(error => response.status(400).send(error))
});


router.post('/create', auth_middleware, (request, response) => {
  const job = request.body;

  if(!job.title || !job.companyName || !job.location || !job.description || !job.email) {
    return response.status(422).send("Missing data");
  }

  // // set the owner of the job as the session user!
  job.owner = request.session.username;

  PokemonAccessor.insertPokemon(request.body)
     .then(pokemonResponse => response.status(200).send(pokemonResponse))
     .catch(error => response.status(400).send(error))
})

router.get('/about', function(req, res) {
  res.send('Job Board is a place to view and manage jobs');
});

module.exports = router;