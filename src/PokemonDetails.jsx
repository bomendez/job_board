import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NavBar from './navbar';

export default function() {
    const pokemonId = useParams().pokemonId;

    function findPokemonDetails() {

        axios.get('/api/pokemon/find/' + pokemonId)
            .then(response => setPokemon(response.data))
            .catch(error => console.log("Could not find job"));

    }


    const [pokemon, setPokemon] = useState(null);
    useEffect(findPokemonDetails, []);


    const pokemonComponent = pokemon ? 
        (<div class="d-flex h-100 text-center text-white bg-dark">
            <div class="d-flex h-100 p-3 mx-auto flex-column">
                <NavBar />
                <div>
                    Job Title: {pokemon.title}
                </div>
                <div>
                    Company Name: {pokemon.companyName}
                </div>
                <div>
                    Location: {pokemon.location}
                </div>
                <div>
                    Description: {pokemon.description}
                </div>
                <div>
                    Email: <a href="{}">{pokemon.email}</a>
                </div>
                <div>
                    Posting Date: {pokemon.postingDate}
                </div>
                <div>
                    {pokemon.website ? "Company Website: " + pokemon.website : "none"}
                </div>
            </div>
        </div>) :
        (<div> No Pokemon found </div>);

    return (
        <div>
            {pokemonComponent}
        </div>
    )
}