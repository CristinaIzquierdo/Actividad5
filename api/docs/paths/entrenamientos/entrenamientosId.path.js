export const entrenamientosIdPath = {
  get: {
    tags: ['entrenamiento'],
    summary: 'Obtiene un entrenamiento',
    operationId: 'getEntrenamiento',
    parameters: [
      {
        name: '_id',
        in: 'path',
        description: 'Id del entrenamiento',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      200: {
        description: 'Entrenamiento',
        content: {
          'application/json': {
            $ref: '#/components/schemas/Entrenamiento',
          },
          'application/xml': {
            schema: {
              $ref: '#/components/schemas/Entrenamiento',
            },
          },
        },
      },
    },
  },
  put: {
    tags: ['entrenamiento'],
    summary: 'Actualiza un entrenamiento',
    operationId: 'updateEntrenamiento',
    parameters: [
      {
        name: '_id',
        in: 'path',
        description: 'Id del entrenamiento',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    requestBody: {
      description: 'Entrenamiento a actualizar',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Entrenamiento',
          },
        },
        'application/xml': {
          schema: {
            $ref: '#/components/schemas/Entrenamiento',
          },
        },
      },
      required: true,
    },
    responses: {
      default: {
        description: 'Entrenamiento actualizado',
        content: {},
      },
    },
  },
  delete: {
    tags: ['entrenamiento'],
    summary: 'Elimina un entrenamiento',
    operationId: 'deleteEntrenamiento',
    parameters: [
      {
        name: '_id',
        in: 'path',
        description: 'Id del entrenamiento',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      default: {
        description: 'Entrenamiento eliminado',
        content: {},
      },
    },
  },
};
