import { NextFunction, Request, Response, Router } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user.repository";

import JWT from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes/build/cjs/status-codes";
import basicAuthenticationMiddleware from "../middlewares/basic-authentication.middleware";
import jwtAuthenticationMiddleware from "../middlewares/jwt-authentication.middleware";


// "iss"  O domínio da aplicação geradora do token
// "sub" É o assunto do token, mas é muito utilizado para guardar o ID do usuário
// "aud" Define quem pode usar o token
// "exp" Data para expiração do token
// "nbf" Define uma data para qual o token não pode ser aceito antes dela
// "iat" Data de criação do token
// "jti" O id do token



const authorizationRoute = Router();


authorizationRoute.post('/token', basicAuthenticationMiddleware, async (request: Request, response: Response, next: NextFunction) => {
    try {
       
        const user = request.user;

        if (!user) {
            throw new ForbiddenError('Usuário não informado, por favor tente novamente');
        }

        const jwtPayload = { username: user?.username };
        const jwtOptions = { subject: user?.uuid };
        const secretKey = 'my_secret_key';

        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

        response.status(StatusCodes.OK).json({ token: jwt });


        

    } catch (error) {
        next(error);
    }
});

authorizationRoute.post('/token/validate', jwtAuthenticationMiddleware, (request: Request, response: Response, next: NextFunction) => {
    response.sendStatus(StatusCodes.OK);
});

export default authorizationRoute;