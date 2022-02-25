import express, {Request, Response, NextFunction} from "express";
import statusRoutes from "./routes/status.toute";
import userRoute from "./routes/users.route";



const app = express();

// configurações da apliacação
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// consfigurações das rotas
app.use(userRoute);
app.use(statusRoutes);




// servidor http
app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000: http://localhost:3000");
    
});