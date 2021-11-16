const { request, response } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

const cursos = ["FUllStack", "Desenvolvimento de games", "viver de youtube"];

// retornar um curso
app.get('/cursos/:app', (request, response) => {
    const { app } = request.params;


    return response.json(cursos[app]);
})

// retornar todos os cursos
app.get('/cursos', (request, response) => {
    return res.json(cursos);
})

// criar um novo curso
app.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name);
})

// atualizar o curso
app.put('/cursos/:app', (request, response) => {
    const { app } = request.params;
    const { name } = request.body

    cursos[app] = name;



    return response.json(cursos);
})

// deletar um curso
app.delete('/cursos/:index', (request, response) => {
    const { app } = request.params;

    cursos.splice(app, 1);


    return response.json({ message: "O curso foi deletado..."})
})









// testar servidor
app.get('/', (req, res) => {
    res.send("servidor iniciado...")
})

app.listen(3000, () => {
    console.log("servidor executado porta 3000: http://localhost:3000")
})