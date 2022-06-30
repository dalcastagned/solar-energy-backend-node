import express, { Request, Response } from 'express';
import { getPlantController } from '../useCases/GetPlantById';
import { createPlantController } from '../useCases/CreatePlant';
import { removePlantController } from '../useCases/RemovePlant';
import { updatePlantController } from '../useCases/UpdatePlant';
import { getAllPlantsController } from '../useCases/GetAllPlants';
import { getCountsController } from '../useCases/GetCounts';
import { protect } from '../middleware/auth';

const plantRoutes = express.Router();

plantRoutes
  .get('/api/plant', protect, (request: Request, response: Response) =>
    getAllPlantsController.handle(request, response),
  )
  .get('/api/plant/counts', protect, (request: Request, response: Response) =>
    getCountsController.handle(request, response),
  )
  .get('/api/plant/:id', protect, (request: Request, response: Response) =>
    getPlantController.handle(request, response),
  )
  .post('/api/plant', protect, (request: Request, response: Response) =>
    createPlantController.handle(request, response),
  )
  .delete('/api/plant/:id', protect, (request: Request, response: Response) =>
    removePlantController.handle(request, response),
  )
  .put('/api/plant/:id', protect, (request: Request, response: Response) =>
    updatePlantController.handle(request, response),
  );

export { plantRoutes };
