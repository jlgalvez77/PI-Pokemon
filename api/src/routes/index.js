const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.get('/', (req, res) => {
    res.status(200).send('Bienvenido a la API de Pokemon');
});

mainRouter.get('/pokemon', (req, res) => {
    res.status(200).send('Listado de Pokemon');

});

mainRouter.get('/pokemon/:id', (req, res) => {

});

mainRouter.get('pokemon/id/name', (req, res) => {
    const { name } = req.params;
});

mainRouter.get('/types', (req, res) => {

});

mainRouter.post('/pokemon', (req, res) => {
    res.status(200).send('Creando Pokemon');
});

module.exports = mainRouter;
