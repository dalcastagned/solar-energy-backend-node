import express, { Request, Response } from 'express';
import { createGenerationController } from '../useCases/CreateGeneration';
import { getAllGenerationsController } from '../useCases/GetAllGenerations';
import { getGenerationController } from '../useCases/GetGenerationById';

const generationRoutes = express.Router();

generationRoutes
  .get('/api/plant/:plantId/generation', (request: Request, response: Response) =>
    getAllGenerationsController.handle(request, response),
  )
  .get('/api/plant/:plantId/generation/:generationId', (request: Request, response: Response) =>
    getGenerationController.handle(request, response),
  )
  .post('/api/plant/:plantId/generation', (request: Request, response: Response) =>
    createGenerationController.handle(request, response),
  );

export { generationRoutes };
