const express = require('express'); 
const router = express.Router();
const Client = require('../model/client'); 

// Rota para listar todos os clientes
router.get('/', async (req, res) => {
    try {
        const clients = await Client.find({});
        res.json(clients);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Rotas para listar clientes por id
router.get('/:id', async (req, res) => {
    try {
        const clients = await Client.find({ id: req.params.id });
        res.status(200).json(clients);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Rotas para listar clientes por nome
router.get('/:name', async (req, res) => {
    try {
        const clients = await Client.find({ name: req.params.name });
        res.status(200).json(clients);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


// Rota para criar um cliente
router.post('/', async (req, res) => {
    let { id, name, sex, born, age, city } = req.body;
    try {
        const client = await Client.create({ id, name, sex, born, age, city });
        return res.status(200).json(client);
    } catch (err) {
        console.error('Erro ao criar cliente:', err); // Adiciona log detalhado do erro
        return res.status(500).json({ error: 'Erro ao criar cliente', details: err.message });
    }
});


module.exports = router;

