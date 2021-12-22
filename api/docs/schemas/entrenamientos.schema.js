export const entrenamiento = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
      description: 'Id del entrenamiento',
    },
    fecha: {
      type: 'string',
      description: 'Fecha del entrenamiento',
    },
    ejercicios: {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Ejercicios del entrenamiento',
    },
    asistentes: {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Asistentes del entrenamiento',
    },
  },
  xml: {
    name: 'entrenamiento',
  },
};

export const addEntrenamiento = {
  type: 'object',
  properties: {
    fecha: {
      type: 'string',
      description: 'Fecha del entrenamiento',
    },
    ejercicios: {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Ejercicios del entrenamiento',
    },
    asistentes: {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Asistentes del entrenamiento',
    },
  },
  xml: {
    name: 'entrenamiento',
  },
};
