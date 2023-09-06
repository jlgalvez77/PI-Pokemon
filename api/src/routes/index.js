const { Router } = require('express');
const { getPokemonsHandler, getPokemonHandler, createPokemonHandler } = require('../handlers/pokemonHandlers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.get('/pokemon', getPokemonsHandler);

mainRouter.get('/pokemon/:id', getPokemonHandler)

mainRouter.get('pokemon/:name', getPokemonHandler)

mainRouter.get('/types', getPokemonHandler)

mainRouter.post('/pokemon', createPokemonHandler)

module.exports = mainRouter;
