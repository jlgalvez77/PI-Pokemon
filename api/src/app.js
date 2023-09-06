const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const mainRouter = require('./routes/index.js')

require('./db.js');

const server = express();

server.name = 'API';

//Middleware, con bodyParser se analizan los datos que llegan desde el cliente, urlencoded analiza los datos codificados en la URL, la 
// función limit, establece el tamaño máximo de la solicitud, json analiza los datos codificados en JSON, cookieParse anaaliza los datos 
// de la cookie de la solicitud, morgan muestra las solicitudes y respuestas HTTP en la consola. Es middleware final, establece las cabeceras 
//CORS(Cross-Origin Resource Sharing) que permite que el cliente acceda a los recursos del servidor desde un origen diferente.
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', mainRouter);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
