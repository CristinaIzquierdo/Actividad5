export const jugadoresIdPath = {
  get: {
    tags: ['jugador'],
    summary: 'Obtiene un jugador',
    operationId: 'getJugador',
    parameters: [
      {
        dni: {
          name: 'dni',
          in: 'path',
          description: 'DNI del jugador',
          required: true,
          schema: {
            type: 'string',
          },
        },
      },
    ],
    responses: {
      200: {
        description: 'Jugador',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Jugador',
            },
          },
          'application/xml': {
            schema: {
              $ref: '#/components/schemas/Jugador',
            },
          },
        },
      },
    },
  },
  put: {
    tags: ['jugador'],
    summary: 'Actualiza un jugador',
    operationId: 'updateJugador',
    parameters: [
      {
        dni: {
          name: 'dni',
          in: 'path',
          description: 'DNI del jugador',
          required: true,
          schema: {
            type: 'string',
          },
        },
      },
    ],
    requestBody: {
      description: 'Jugador a actualizar',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Jugador',
          },
        },
        'application/xml': {
          schema: {
            $ref: '#/components/schemas/Jugador',
          },
        },
      },
      required: true,
    },
    responses: {
      200: {
        description: 'Jugador',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Jugador',
            },
          },
          'application/xml': {
            schema: {
              $ref: '#/components/schemas/Jugador',
            },
          },
        },
      },
    },
  },
};
