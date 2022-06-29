import express, { Request, Response } from 'express';
import { createGenerationController } from '../useCases/CreateGeneration';
import { getAllGenerationsController } from '../useCases/GetAllGenerations';

const generationRoutes = express.Router();

generationRoutes
  .get('/api/plant/:plantId/generation', (request: Request, response: Response) =>
    getAllGenerationsController.handle(request, response),
  )
  .post('/api/plant/:plantId/generation', (request: Request, response: Response) =>
    createGenerationController.handle(request, response),
  );

export { generationRoutes };
