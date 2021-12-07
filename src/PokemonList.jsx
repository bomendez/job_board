import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navbar';

export default function PokemonSearchBar() {
    const [allPokemon, setAllPokemon] = useState([]);


    function findAllPokemon() {
        axios.get('http://localhost:8000/api/pokemon/findAll')
            .then(response => {
                setAllPokemon(response.data)
            })
            .catch(error => console.error(error));
    }

    useEffect(findAllPokemon, []);

    const pokemonListComponent = allPokemon.map(pokemon => {
        return (<>
        <p></p>
        <Link to={"../pokemon/" + pokemon._id.toString()}>{pokemon.title}</Link>
        </>)
    })

    return (
        <div class="d-flex h-100 text-center text-white bg-dark">
            <div class="d-flex h-100 p-3 mx-auto flex-column">
            <NavBar />
            <h1>All Jobs:</h1>
            {pokemonListComponent}
            </div>
        </div>
    )
}