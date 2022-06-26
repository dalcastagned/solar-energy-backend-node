import express, { Request, Response } from 'express';
import { getPlantController } from '../useCases/GetPlantById';
import { createPlantController } from '../useCases/CreatePlant';

const plantRoutes = express.Router();

plantRoutes
  .get('/plant/:id', (request: Request, response: Response) =>
    getPlantController.handle(request, response),
  )
  .post('/plant', (request: Request, response: Response) =>
    createPlantController.handle(request, response),
  );

export { plantRoutes };
