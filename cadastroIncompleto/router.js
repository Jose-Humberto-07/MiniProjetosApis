const { request, response } = require('express');
const express = require('express');
const connection = require('./database/db');


const routes = express.Router();


routes.get('/', (request, response) => {
    connection.query('SELECT * FROM tcadastro', (err, result) => {
        if(err) {
            throw err;
        } else {
            response.send(result)
        }
    })
})

routes.get("/cadastro", (request, response) => {
    response.render("../src/cadastro");
});


module.exports = routes;