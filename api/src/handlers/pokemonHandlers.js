const { createPokemon, getPokemonById } = require("../controllers/PokemonController");

const getPokemonsHandler = (req, res) => {
    const { name } = req.query;
    if(name) {
        //Trae un Pokemon a traves de su nombre
        res.send(`Muestra el Pokemon con el nombre ${name}`)
    } else {
        //Trae una lista de Pokemons
        res.send('Muestra la lista de Pokemons')
    }
};


const getPokemonHandler = async(req, res) => {
    //Trae un Pokemon a traves de su id
    const { id } = req.params;

    const source = isNaN(id) ? 'BDD' : 'API';

    try {
        const pokemon = await getPokemonById(id, source);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

const createPokemonHandler = async (req, res) => {
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