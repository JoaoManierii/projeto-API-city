const express = require('express'); // Importa o express
const path = require('path');
const app = express();
require('./database');
const cityrouter = require('./routes/city');
const clientrouter = require('./routes/client');

app.use(express.json()); // Permite o uso de JSON no corpo da requisição
app.use(express.static(path.join(__dirname, 'public'))); // Serve arquivos estáticos da pasta 'public'

app.get('/client', (req, res) => {
    res.sendFile(path.join(__dirname, 'Consumo De API', 'client.html')); // Serve o arquivo HTML para clientes
});

app.get('/city', (req, res) => {
    res.sendFile(path.join(__dirname, 'Consumo De API', 'city.html')); // Serve o arquivo HTML para cidades
});

app.use('/api/city', cityrouter); // Define o prefixo da API para evitar conflitos
app.use('/api/client', clientrouter);

// Inicializa o servidor na porta 3000
app.listen(3000, () => {
    console.log("API RODANDO!");
});
