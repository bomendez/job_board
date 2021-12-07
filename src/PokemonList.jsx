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
        <Link to={"pokemon/" + pokemon.title}>{pokemon.title}</Link>
        </>)
    })

    return (
        <div>
            <NavBar />
            <h1>All Jobs:</h1>
            {pokemonListComponent}
        </div>
    )
}