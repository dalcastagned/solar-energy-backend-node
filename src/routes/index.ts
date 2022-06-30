import express from 'express';
import { Express } from 'express-serve-static-core';
import { generationRoutes } from './GenerationsRoutes';
import { plantRoutes } from './PlantsRoutes';
import { userRoutes } from './UserRoutes';
import cors from 'cors';

const routes = (app: Express) => {
  app.use(cors());
  app.use(express.json(), generationRoutes, plantRoutes, userRoutes);
};

export { routes };
