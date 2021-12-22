export const ejercicio = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
      description: 'Id del ejercicio',
    },
    titulo: {
      type: 'string',
      description: 'Título del ejercicio',
    },
    descripcion: {
      type: 'string',
      description: 'Descripción del ejercicio',
    },
    etiquetas: {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Etiquetas del ejercicio',
    },
    duracion: {
      type: 'number',
      description: 'Duración del ejercicio',
    },
    dureza: {
      type: 'object',
      properties: {
        resistencia: {
          type: 'number',
          description: 'Resistencia del ejercicio',
        },
        velocidad: {
          type: 'number',
          description: 'Velocidad del ejercicio',
        },
        recuperacion: {
          type: 'number',
          description: 'Recuperación del ejercicio',
        },
      },
      description: 'Dureza del ejercicio',
    },
    materialesNecesarios: {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Materiales necesarios para el ejercicio',
    },
    recursosMultimedia: {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Recursos multimedia del ejercicio',
    },
  },
  xml: {
    name: 'ejercicio',
  },
};

export const addEjercicio = {
  type: 'object',
  properties: {
    titulo: {
      type: 'string',
      description: 'Título del ejercicio',
    },
    descripcion: {
      type: 'string',
      description: 'Descripción del ejercicio',
    },
    etiquetas: {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Etiquetas del ejercicio',
    },
    duracion: {
      type: 'number',
      description: 'Duración del ejercicio',
    },
    dureza: {
      type: 'object',
      properties: {
        resistencia: {
          type: 'number',
          description: 'Resistencia del ejercicio',
        },
        velocidad: {
          type: 'number',
          description: 'Velocidad del ejercicio',
        },
        recuperacion: {
          type: 'number',
          description: 'Recuperación del ejercicio',
        },
      },
      description: 'Dureza del ejercicio',
    },
    materialesNecesarios: {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Materiales necesarios para el ejercicio',
    },
    recursosMultimedia: {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Recursos multimedia del ejercicio',
    },
  },
  xml: {
    name: 'ejercicio',
  },
};
