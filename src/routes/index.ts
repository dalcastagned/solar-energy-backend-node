import express from 'express';
import { Express } from 'express-serve-static-core';
import { generationRoutes } from './GenerationsRoutes';
import { plantRoutes } from './PlantsRoutes';
import { userRoutes } from './UserRoutes';

const routes = (app: Express) => {
  app.use(express.json(), generationRoutes, plantRoutes, userRoutes);
};

export { routes };
