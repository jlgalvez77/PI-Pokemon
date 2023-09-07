const { Pokemon } = require('../db.js');
const axios = require('axios');

const createPokemon = async (name, image, life, atack, defense) => 
    await Pokemon.create({name, image, life, atack, defense});

    const getPokemonById = async(id, source) => {
        const pokemon = source === 'API' ?
        (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data :
        await Pokemon.findByPk(id);
        return pokemon; 
    };

module.exports = { createPokemon, getPokemonById };