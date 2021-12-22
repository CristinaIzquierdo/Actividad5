import express from 'express';
import dotenv from 'dotenv';
import swaggerUI from 'swagger-ui-express';
dotenv.config();

//express config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongodb config
import mongoose from 'mongoose';
const mongoDB = 'mongodb://localhost/mongodb';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose error: '));

const port = process.env.PORT || 8080;
const url = `http://localhost:${port}`;
const api = process.env.API;

import { route as entrenamientosRoute } from './routes/entrenamientos.routes.js';
import { route as jugadoresRoute } from './routes/jugadores.routes.js';
import { route as ejerciciosRoute } from './routes/ejercicios.routes.js';

app.use(`${api}/entrenamientos`, entrenamientosRoute);
app.use(`${api}/jugadores`, jugadoresRoute);
app.use(`${api}/ejercicios`, ejerciciosRoute);

//Document
import { swaggerDocument } from './docs/swagger.js';
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, () => {
  console.log(` * Listening at port ${port}\n`);
  console.log(` * Server launched in ${url}\n`);
  console.log(` * API URL ${url}${api}`);
});

export default app;
