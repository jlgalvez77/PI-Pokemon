const { Pokemon } = require('../db.js');
const axios = require('axios');

const createPokemon = async (name, image, life, atack, defense) => 
    await Pokemon.create({name, image, life, atack, defense});

const getPokemonById = async(id, source) => {
    const pokemon = source === 'API' ?
    //Si el Pokemon esta en la API, lo trae de la API
    (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data :
    //Si el Pokemon esta en la BDD, lo trae de la BDD
    await pokemon.findAll(id);
    const Pokemons = Array.of(pokemon);
    return Pokemons; 
};

const searchPokemonByName = async (name) => {
    const pokemon = source === 'API' ?
    //Si el Pokemon esta en la API, lo trae de la API
    (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data :
    //Si el Pokemon esta en la BDD, lo trae de la BDD
    await pokemon.findAll({where: { name }})
    const Pokemons = Array.of(pokemon);
    return Pokemons;
};

const pokemonList = async () => {
    // Busca pokemons en la API y en la BDD y los unifica
    const databasePokemons = await Pokemon.findAll();
    // Traemos los primeros 80 pokemons de la API debido a que la API tiene 1118 pokemons
    const apiResponse = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=80')).data;
    // Concatenamos los pokemons de la BDD con los de la API
    return databasePokemons.concat(apiResponse.results);
};



module.exports = { createPokemon, getPokemonById, pokemonList, searchPokemonByName };