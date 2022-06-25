import express from 'express';
import { Express } from 'express-serve-static-core';

const routes = (app: Express) => {
  app.use(express.json());
};

export { routes };
