const express = require('express'); // Importa o express
const app = express();
require('./database');
const cityrouter = require('./routes/city');
const clientrouter = require('./routes/client');
app.use(express.json()); // Permite o uso de JSON no corpo da requisição


app.use('/city', cityrouter);
app.use('/client', clientrouter);

// Inicializa o servidor na porta 3000
app.listen(3000,() => {
    console.log("API RODANDO!");
});