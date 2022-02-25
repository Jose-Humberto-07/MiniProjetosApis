import Express, {Request, Response, NextFunction} from "express";




const app = Express();

app.get('/status', (request: Request, response: Response, next: NextFunction) => {
    response.status(200).send({ foo: 'testando'});
});

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000: http://localhost:3000");
    
});