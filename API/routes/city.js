const express = require('express'); // Importa o express
const router = express.Router();
const City = require('../model/city'); // Importa o model City


// Rota para listar todas as cidades
router.get('/', async (req, res) => {
    try {
        const cities = await City.find({});
        res.json(cities);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Rotas para listar cidades por estado
router.get('/:state', async (req, res) => {
    try {
        const cities = await City.find({ state: req.params.state });
        res.status(200).json(cities);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Rota para criar uma cidade
router.post('/', async (req, res) => {
    let { name, state } = req.body;
    try {
        const city = await City.create({ name, state });
        return res.status(200).json(city);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;

