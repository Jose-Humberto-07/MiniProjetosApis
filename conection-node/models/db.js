const Sequelize = require('sequelize');

const conection = new Sequelize("ramais", "root", "root", {
    host: 'localhost',
    dialect: 'mysql'
});

conection.authenticate()
.then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!")
}).catch(() => {
    console.log("Erro: conexão com o banco de dados não realizada com sucesso!")
})

module.exports = conection;