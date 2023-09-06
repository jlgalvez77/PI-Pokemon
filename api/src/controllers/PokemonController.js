const { Pokemon } = require('../db.js');

const createPokemon = async (name, image, life, atack, defense) => {
    const newPokemon = await Pokemon.create({name, image, life, atack, defense});
    return newPokemon;
};

module.exports = { createPokemon };