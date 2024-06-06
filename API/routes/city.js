const express = require('express'); // Importa o express
const router = express.Router();
const City = require('../model/city'); // Importa o model City

// Rota para listar todas as cidades
router.get('/', async (req, res) => {
    try {
        const cities = await City.find({});
        res.json(cities);
    } catch (err) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Rota para listar cidades por nome
router.get('/name/:name', async (req, res) => {
    try {
        const cities = await City.find({ name: req.params.name });
        res.status(200).json(cities);
    } catch (err) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Rota para listar cidades por estado
router.get('/state/:state', async (req, res) => {
    try {
        const cities = await City.find({ state: req.params.state });
        res.status(200).json(cities);
    } catch (err) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Rota para criar uma cidade
router.post('/', async (req, res) => {
    const { name, state } = req.body;
    // Verifica se os campos foram preenchidos
    if (!name || !state) {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }
    try {
        const city = await City.create({ name, state });
        res.status(200).json(city);
    } catch (err) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

module.exports = router;