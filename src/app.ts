import express from 'express';
import { routes } from './routes';
import db from './config/dbConnect';

db.on('error', console.log.bind(console, 'Connection error'));
db.once('open', () => {
  console.log('Successful database connection');
});

const app = express();

routes(app);

export { app };
