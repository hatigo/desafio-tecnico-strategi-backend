const express = require('express');
const cadastroClientes = require('./controllers/clientes/cadastro');
const clientes = require('./controllers/clientes/clientes');
const deleteCliente = require('./controllers/clientes/delete');
const editarCliente = require('./controllers/clientes/editar');
const cadastro = require('./controllers/corretores/cadastro');
const login = require('./controllers/corretores/login');
const imoveis = require('./controllers/imoveis/imoveis');
const cadastroDeVendas = require('./controllers/vendas/cadastro');
const tokenVerify = require('./middlewares/tokenVerify');

const routes = express();

routes.post('/login', login);
//routes.post('/cadastro', cadastro); // cadastro de corretor, foi utilizado para cadastrar uma senha encriptada

routes.post('/cliente-cadastro', tokenVerify , cadastroClientes);
routes.get('/clientes',tokenVerify, clientes);
routes.put('/cliente-edicao',tokenVerify, editarCliente);
routes.delete('/clientes/:id',tokenVerify, deleteCliente);

routes.get('/imoveis', tokenVerify, imoveis);

routes.post('/vendas-cadastro', tokenVerify, cadastroDeVendas);



module.exports = routes;