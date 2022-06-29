import express, { Request, Response } from 'express';
import { createGenerationController } from '../useCases/CreateGeneration';

const generationRoutes = express.Router();

generationRoutes.post('/api/plant/:plantId/generation', (request: Request, response: Response) =>
  createGenerationController.handle(request, response),
);

export { generationRoutes };
