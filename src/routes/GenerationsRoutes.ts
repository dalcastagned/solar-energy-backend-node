import express, { Request, Response } from 'express';
import { protect } from '../middleware/auth';
import { createGenerationController } from '../useCases/CreateGeneration';
import { getAllGenerationsController } from '../useCases/GetAllGenerations';
import { getGenerationController } from '../useCases/GetGenerationById';
import { getGenerationsLast12MonthsController } from '../useCases/GetGenerationsLast12Months';
import { removeGenerationController } from '../useCases/RemoveGeneration';
import { updateGenerationController } from '../useCases/UpdateGeneration';

const generationRoutes = express.Router();

generationRoutes
  .get('/api/plant/generations-last-12-months', protect, (request: Request, response: Response) =>
    getGenerationsLast12MonthsController.handle(request, response),
  )
  .get('/api/plant/:plantId/generation', protect, (request: Request, response: Response) =>
    getAllGenerationsController.handle(request, response),
  )
  .get(
    '/api/plant/:plantId/generation/:generationId',
    protect,
    (request: Request, response: Response) => getGenerationController.handle(request, response),
  )
  .post('/api/plant/:plantId/generation', protect, (request: Request, response: Response) =>
    createGenerationController.handle(request, response),
  )
  .delete(
    '/api/plant/:plantId/generation/:generationId',
    protect,
    (request: Request, response: Response) => removeGenerationController.handle(request, response),
  )
  .put(
    '/api/plant/:plantId/generation/:generationId',
    protect,
    (request: Request, response: Response) => updateGenerationController.handle(request, response),
  );

export { generationRoutes };
