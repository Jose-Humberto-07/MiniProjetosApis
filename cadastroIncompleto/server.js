const express = require('express');
const routes =  require('./router');
const db = require('./database/db.js');
const sequelize = require('./database/db.js');
const user = require('./database/models/ramaisModel');
const path = require('path');





const app = express();

app.use(express.json());
app.use('/', require('./router'));

app.set('view engine', 'ejs');




/**
 * db.sync(() => {
    console.log(`Banco de dados conectado com sucesso: ${process.env.DB_NAME}`)
});
 */

sequelize.authenticate()
.then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!")
}).catch(() => {
    console.log("Erro: conexão com o banco de dados não realizada!")
});


/**
 * 
 */



app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});




