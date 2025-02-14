import express from 'express';
import { Express, Request, Response } from 'express';

const app: Express = express();

// Add route with name parameter
app.get('/:name', (req: Request, res: Response) => {
  const name = req.params.name;
  res.json({ message: `Hello World ${name}` });
});

// Keep the default route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});