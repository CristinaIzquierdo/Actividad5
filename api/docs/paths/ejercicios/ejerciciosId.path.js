export const ejerciciosIdPath = {
  get: {
    tags: ['ejercicio'],
    summary: 'Obtiene un ejercicio',
    operationId: 'getEjercicio',
    parameters: [
      {
        name: '_id',
        in: 'path',
        description: 'Id del ejercicio',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      200: {
        description: 'Ejercicio',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Ejercicio',
            },
          },
          'application/xml': {
            schema: {
              $ref: '#/components/schemas/Ejercicio',
            },
          },
        },
      },
    },
  },
};
