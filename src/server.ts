import { app } from './app';

const port = process.env.PORT || 7141;

app.listen(port, () => {
  console.log(`Server listen http://localhost:${port}`);
});
