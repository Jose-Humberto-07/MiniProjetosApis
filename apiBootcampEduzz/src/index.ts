import express, {Request, Response, NextFunction} from "express";
import userRoute from "./routes/users.route";



const app = express();

// configurações da apliacação
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// consfigurações das rotas
app.use(userRoute);

app.get('/status', (request: Request, response: Response, next: NextFunction) => {
    response.status(200).send({ foo: 'testandoooooooooooooooo'});
});


// servidor http
app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000: http://localhost:3000");
    
});