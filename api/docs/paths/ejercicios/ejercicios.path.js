import { addEjercicio } from '../../schemas/ejercicios.schema.js';

export const ejerciciosPath = {
  get: {
    tags: ['ejercicio'],
    summary: 'Obtiene todos los ejercicios',
    operationId: 'getEjercicios',
    responses: {
      200: {
        description: 'Lista de ejercicios',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Ejercicio',
            },
          },
        },
      },
    },
  },
  post: {
    tags: ['ejercicio'],
    summary: 'Añade un ejercicio',
    operationId: 'addEjercicio',
    requestBody: {
      description: 'Ejercicio a añadir',
      content: {
        'application/json': {
          schema: addEjercicio,
        },
      },
      required: true,
    },
    responses: {
      default: {
        description: 'Ejercicio añadido',
        content: {},
      },
    },
    'x-codegen-request-body-name': 'body',
  },
};
