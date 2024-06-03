const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    name: String,
    state: String
});

module.exports = mongoose.model('City', CitySchema);
