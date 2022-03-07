import { NextFunction, Request, Response, Router } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";



const authorizationRoute = Router();


authorizationRoute.post('/token', (request: Request, response: Response, next: NextFunction) => {
    try {
        const authorizationHeader = request.headers['authorization'];

        if (!authorizationHeader) {
            throw new ForbiddenError('Credenciais não informadas');
            
        }


        const [authenticationType, token] = authorizationHeader.split(' ');

        if (authenticationType !== 'Basic' || !token) {
            throw new ForbiddenError('TIpo de autenticação inválida');
        }

        const tokenContent = Buffer.from(token, 'base64').toString('utf-8');

        const [username, password] = tokenContent.split(':');


        if (!username || !password) {
            throw new ForbiddenError('Usuário ou senha não informados');
        }


        console.log(username, password);
    } catch (error) {
        next(error);
    }
});


export default authorizationRoute;