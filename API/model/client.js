const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    name: String,
    sex: String,
    born: Date,
    age: Number,
    city: String
});

module.exports = mongoose.model('Client', ClientSchema);