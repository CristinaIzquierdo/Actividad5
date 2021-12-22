import express from 'express';

const route = express.Router();

import * as entrenamientosController from '../controllers/entrenamientos.controllers.js';

route.get('/', entrenamientosController.getAll);
route.get('/:id', entrenamientosController.get);

route.post('/', entrenamientosController.add);

route.put('/:id', entrenamientosController.update);

route.delete('/:id', entrenamientosController.remove);

export { route };
