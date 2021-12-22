import { addEntrenamiento } from '../../schemas/entrenamientos.schema.js';

export const entrenamientosPath = {
  get: {
    tags: ['entrenamiento'],
    summary: 'Obtiene todos los entrenamientos',
    operationId: 'getEntrenamientos',
    responses: {
      200: {
        description: 'Lista de entrenamientos',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Entrenamiento',
            },
          },
        },
      },
    },
  },

  post: {
    tags: ['entrenamiento'],
    summary: 'Añade un entrenamiento',
    operationId: 'addEntrenamiento',
    requestBody: {
      description: 'Entrenamiento a añadir',
      content: {
        'application/json': {
          schema: addEntrenamiento,
        },
      },
      required: true,
    },
    responses: {
      default: {
        description: 'Entrenamiento añadido',
        content: {},
      },
    },
    'x-codegen-request-body-name': 'body',
  },
};
