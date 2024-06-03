const express = require('express'); // Importa o express
const router = express.Router();
const City = require('../model/city'); // Importa o model City



router.get('/', async (req, res) => {
    try {
        const cities = await City.find({});
        res.json(cities);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    let { name, state } = req.body;
    try {
        const city = await City.create({ name, state });
        res.status(200).json(city);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;

