import express from 'express';

const route = express.Router();

import * as jugadoresController from '../controllers/jugadores.controllers.js';

route.get('/', jugadoresController.getAll);
route.get('/:id', jugadoresController.get);

route.post('/', jugadoresController.add);

route.put('/:id', jugadoresController.update);

export { route };
