const { createPokemon, getPokemonById, searchPokemonByName, pokemonList } = require("../controllers/PokemonController");

const getPokemonsHandler = async (req, res) => {
    const { name } = req.query;

    const results = name ? searchPokemonByName(name) : await pokemonList();

    res.status(200).json(results);
};

const getPokemonHandler = async(req, res) => {
    //Trae un Pokemon a traves de su id
    const { id } = req.params;
    // Comprueba a traves del id si el Pokemon esta en la BDD o en la API
    const source = isNaN(id) ? 'BDD' : 'API';
    try {
        const pokemon = await getPokemonById(id, source);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

const createPokemonHandler = async (req, res) => {
    //Crea un Pokemon
    const { name, image, life, atack, defense } = req.body;
    try {
        const newPokemon = await createPokemon(name, image, life, atack, defense);
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(400),json({ error: error.message })
    }
};

module.exports = {
    getPokemonsHandler,
    getPokemonHandler,
    createPokemonHandler
};