// import express from 'express';
// import bodyParser from 'body-parser';
// //import { connectDB } from './src/services/database';
// //import routes from './src/routes';

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
// ///app.use('/api', routes);

// connectDB().then(() => {
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// });

import express, { Request, Response } from 'express';
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
