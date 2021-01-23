const express = require('express');
const leite = require('leite');
const api = new leite();

const help = require('./controllers/HelpController');
const pessoa = require('./controllers/PessoaController');
const card = require('./controllers/CardController');

const ceps = require('../ceps.json');

const routes = express.Router();

const amount = ceps.totalCeps;
// routes.get('/', (request, response) => response.json(ceps.ceps[Math.floor(Math.random() * ceps.ceps.length)]));
routes.get('/', help.new);

routes.get('/pessoa', pessoa.new);
routes.get('/email', (request, response) => response.json({ email: api.pessoa.cpf() + '@robot-mail.com' }));
routes.get('/cpf', (request, response) => response.json({ cpf: api.pessoa.cpf() }));
routes.get('/rg', (request, response) => response.json({ rg: api.pessoa.rg().replace('.', '').replace('.', '').replace('-', '') }));
routes.get('/cep', (request, response) => response.json(ceps.ceps[Math.floor(Math.random() * ceps.ceps.length)]));
// routes.get('/cep', (request, response) => response.json({ cep: api.localizacao.cep() }));
routes.get('/creditcard', card.on_help);
routes.get('/creditcard/:flag', card.on_new);
// routes.get('/on_creditcard', card.on_help);
// routes.get('/on_creditcard/:flag', card.on_new);
// routes.get('/off_creditcard', card.off_new);
routes.get('/creditcardvalidate', card.validate);



module.exports = routes;