const express = require('express');
const routes = require("./routes");
const app = express();
const port = 3333;

//req request:
//res response:

//status de erro

//GET - recebe informações ou dados
//POST - envia informações ou dados
//PUT - atualizar informações ou dados
//DELETE - deletar informações ou dados
//PATH - atualizar informações ou dados

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => res.json({ message: 'Hello World! para todas as pessoas' }))
app.listen(port, () => console.log(`Servidor Conectado ${port}!`));

