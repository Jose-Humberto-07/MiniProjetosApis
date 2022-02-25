import {NextFunction, Request, Response, Router} from 'express';
import { StatusCodes } from 'http-status-codes';


// get /users
// get /users/:uuid
// post /users
// put /users/:uuid
// delete /users/:uuid

const userRoute = Router();
// listar todos os usuários
userRoute.get('/users', (request: Request, response: Response, next: NextFunction) => {
    const users = [{
        userName: 'Humberto'
    }];
    response.status(StatusCodes.OK).send(users);
});
// listar 1 usuário passando o ID por parâmetro
userRoute.get('/users/:uuid', (request: Request<{ uuid: string }>, response: Response, next: NextFunction) => {
    const uuid = request.params.uuid;
    response.status(200).send({ uuid });
});
// insereir um novo usuário
userRoute.post('/users', (request: Request, response: Response, next: NextFunction) => {
    const newUser = request.body;

    console.log(request.body);

    response.status(StatusCodes.CREATED).send(newUser);
});
// atualizando um usuário
userRoute.put('/users/:uuid', (request: Request<{ uuid: string }>, response: Response, next: NextFunction) => {
    const uuid = request.params.uuid;
    const modifieUser = request.body;

    modifieUser.uuid = uuid;

    response.status(StatusCodes.OK).send({ modifieUser });
});
// deletando um usuário
userRoute.delete('/users/:uuid', (request: Request<{ uuid: string }>, response: Response, next: NextFunction) => {

    response.sendStatus(StatusCodes.OK);
});

export default userRoute;