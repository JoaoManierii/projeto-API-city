const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/apicity')
.then(() => {
    console.log("Conectado ao banco de dados");
}).catch((err) => {
    console.log("Erro ao conectar ao banco de dados: " + err);
});

