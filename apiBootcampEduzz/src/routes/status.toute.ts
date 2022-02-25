import { Router, Request, Response, NextFunction } from "express";

import { StatusCodes } from 'http-status-codes';

const statusRoutes = Router();

statusRoutes.get('/status', (request: Request, response: Response, next: NextFunction) => {
    response.sendStatus(StatusCodes.OK);
});


export default statusRoutes;