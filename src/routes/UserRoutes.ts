import express, { Request, Response } from 'express';
import { createUserController } from '../useCases/CreateUser';

const userRoutes = express.Router();

userRoutes.post('/api/user/signup', (request: Request, response: Response) =>
  createUserController.handle(request, response),
);

export { userRoutes };
