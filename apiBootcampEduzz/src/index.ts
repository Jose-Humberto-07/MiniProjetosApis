import express, {Request, Response, NextFunction} from "express";
import bearerAuthenticationMiddleware from "./middlewares/jwt-authentication.middleware";
import errorHandler from "./middlewares/error-handler.middleware";
import authorizationRoute from "./routes/authorization.route";
import statusRoutes from "./routes/status.toute";
import userRoute from "./routes/users.route";



const app = express();

// configurações da apliacação
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// consfigurações das rotas

app.use(statusRoutes);
app.use(authorizationRoute);
app.use(bearerAuthenticationMiddleware);
app.use(userRoute);
// configurações dos Handles de Erro
app.use(errorHandler);


// servidor http
app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000: http://localhost:3000");
    
});