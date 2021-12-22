import express from 'express';

const route = express.Router();

import * as ejerciciosController from '../controllers/ejercicios.controllers.js';

route.get('/', ejerciciosController.getAll);
route.get('/:id', ejerciciosController.get);

route.post('/', ejerciciosController.add);

export { route };
