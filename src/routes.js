const express = require('express');
const { login } = require('./controllers/corretores/corretores');

const routes = express();

routes.post('/login', login);



module.exports = routes;