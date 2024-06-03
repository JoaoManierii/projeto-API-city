const express = require('express'); // Importa o express
const app = express();
require('./database');
app.use(express.json()); // Permite o uso de JSON no corpo da requisição


const cityrouter = require('./routes/city');


app.use('/city', cityrouter);

// Inicializa o servidor na porta 3000
app.listen(3000,() => {
    console.log("API RODANDO!");
});