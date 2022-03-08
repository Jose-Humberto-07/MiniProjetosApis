import { NextFunction, Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import  ForbiddenError  from '../models/errors/forbidden.error.model';
import userRepository from '../repositories/user.repository';



const jwtAuthenticationMiddleware = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
        const authorizationHeader = request.headers['authorization'];

        if (!authorizationHeader) {
            throw new ForbiddenError('Credenciais não informadas');
        }

        const [authorizationType, token] = authorizationHeader.split(' ');

        if (authorizationType !== 'Bearer' || !token) {
            throw new ForbiddenError('Tipo de authenticação inválida');
        }

        if (!token) {
            throw new ForbiddenError('token inválido');
        }


        try {
            const tokenPayload = JWT.verify(token, 'my_secret_key');
            if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
                throw new ForbiddenError('Token inválido');
            }

        const user = await userRepository.findById(tokenPayload.sub);
        request.user = user;
        next();
        } catch (error) {
            throw new ForbiddenError('Token inválido');
        }


    } catch (error) {
        return next(error);
    }
}

export default jwtAuthenticationMiddleware;