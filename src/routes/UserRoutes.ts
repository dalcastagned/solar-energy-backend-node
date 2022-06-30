import express, { Request, Response } from 'express';
import { createUserController } from '../useCases/CreateUser';
import { loginController } from '../useCases/Login';

const userRoutes = express.Router();

userRoutes
  .post('/api/user/signup', (request: Request, response: Response) =>
    createUserController.handle(request, response),
  )
  .post('/api/user/login', (request: Request, response: Response) =>
    loginController.handle(request, response),
  );

export { userRoutes };
