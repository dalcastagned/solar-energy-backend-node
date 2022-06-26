import express from 'express';
import { Express } from 'express-serve-static-core';
import { plantRoutes } from './PlantsRoutes';

const routes = (app: Express) => {
  app.use(express.json(), plantRoutes);
};

export { routes };
