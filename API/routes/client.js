const express = require('express');
const router = express.Router();
const Client = require('../model/client');
const axios = require('axios');

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
router.get('/name/:name', async (req, res) => {
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
    // Previne que campos vazios sejam inseridos
    if (!id || !name || !sex || !born || !age || !city) {
        return res.status(400).json({ error: 'Campo vazio' });
    }
    try {
        // Antes de criar o cliente, verificamos se a cidade existe
        // Nao sei se esse era o melhor jeito de fazer isso, mas foi o que eu consegui pensar
        const response = await axios.get(`http://localhost:3000/api/city/name/${city}`);
        if (!response.data || response.data.length === 0) {
            return res.status(400).json({ error: 'Cidade não encontrada' });
        }
        // Se a cidade existir, criamos o cliente
        const client = await Client.create({ id, name, sex, born, age, city });
        return res.status(201).json(client);
    } catch (err) {
        if (err.response && err.response.status === 400) {
            // Se a cidade não for encontrada, retornamos a resposta apropriada
            return res.status(400).json({ error: 'Cidade não encontrada' });
        }
        console.error('Erro ao criar cliente:', err); // Adiciona log detalhado do erro
        return res.status(500).json({ error: 'Erro ao criar cliente', details: err.message });
    }
});

// Rota para atualizar o nome de um cliente
router.put('/:id', async (req, res) => {
    const { name } = req.body;

    // Verifica se o campo name está vazio
    if (!name) {
        return res.status(400).json({ error: 'Campo vazio' });
    }

    try {
        const client = await Client.findOneAndUpdate({ id: req.params.id }, { name } 
        );

        if (!client) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }

        return res.status(200).json(client);
    } catch (err) {
        console.error('Erro ao atualizar cliente:', err); 
        return res.status(500).json({ error: 'Erro ao atualizar cliente', details: err.message });
    }
});


// Rota para remover um cliente
router.delete('/:id', async (req, res) => { 
    try {
        const client = await Client.findOneAndDelete({ id: req.params.id });
        if (!client) {
            return res.status(404).json({ error: 'Cliente não encontrado' }); // Retorna erro se o cliente não for encontrado
        }
        return res.status(200).json(client); // Retorna o cliente removido
    } catch (err) {
        console.error('Erro ao remover cliente:', err); // Adiciona log detalhado do erro
        return res.status(500).json({ error: 'Erro ao remover cliente', details: err.message });
    }
});


module.exports = router;

