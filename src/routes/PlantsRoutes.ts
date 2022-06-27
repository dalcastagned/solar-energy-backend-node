import express, { Request, Response } from 'express';
import { getPlantController } from '../useCases/GetPlantById';
import { createPlantController } from '../useCases/CreatePlant';
import { removePlantController } from '../useCases/RemovePlant';
import { updatePlantController } from '../useCases/UpdatePlant';
import { getAllPlantsController } from '../useCases/GetAllPlants';

const plantRoutes = express.Router();

plantRoutes
  .get('/plant', (request: Request, response: Response) =>
    getAllPlantsController.handle(request, response),
  )
  .get('/plant/:id', (request: Request, response: Response) =>
    getPlantController.handle(request, response),
  )
  .post('/plant', (request: Request, response: Response) =>
    createPlantController.handle(request, response),
  )
  .delete('/plant/:id', (request: Request, response: Response) =>
    removePlantController.handle(request, response),
  )
  .put('/plant/:id', (request: Request, response: Response) =>
    updatePlantController.handle(request, response),
  );

export { plantRoutes };
