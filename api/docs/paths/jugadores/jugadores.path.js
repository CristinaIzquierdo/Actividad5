import { addJugador } from '../../schemas/jugadores.schema.js';

export const jugadoresPath = {
  get: {
    tags: ['jugador'],
    summary: 'Obtiene todos los jugadores',
    operationId: 'getJugadores',
    responses: {
      200: {
        description: 'Lista de jugadores',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Jugador',
            },
          },
        },
      },
    },
  },
  post: {
    tags: ['jugador'],
    summary: 'Añade un jugador',
    operationId: 'addJugador',
    requestBody: {
      description: 'Jugador a añadir',
      content: {
        'application/json': {
          schema: addJugador,
        },
      },
      required: true,
    },
    responses: {
      default: {
        description: 'Jugador añadido',
        content: {},
      },
    },
    'x-codegen-request-body-name': 'body',
  },
};
