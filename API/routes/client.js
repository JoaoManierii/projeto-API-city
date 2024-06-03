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

// Rota para criar um cliente
router.post('/', async (req, res) => {
    let { name, sex, born, age, city } = req.body;
    try {
        const client = await Client.create({ name, sex, born, age, city });
        return res.status(200).json(client);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;

