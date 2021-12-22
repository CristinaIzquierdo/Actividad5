export const jugador = {
  type: 'object',
  properties: {
    dni: {
      type: 'string',
      description: 'DNI del jugador',
    },
    nombre: {
      type: 'string',
      description: 'Nombre del jugador',
    },
    apellidos: {
      type: 'string',
      description: 'Apellidos del jugador',
    },
    fechaNacimiento: {
      type: 'string',
      description: 'Fecha de nacimiento del jugador',
    },
    condicionesFisicas: {
      type: 'object',
      properties: {
        resistencia: {
          type: 'number',
          description: 'Resistencia del jugador',
        },

        velocidad: {
          type: 'number',
          description: 'Velocidad del jugador',
        },

        recuperacion: {
          type: 'number',
          description: 'Recuperación del jugador',
        },
      },
      description: 'Condiciones fisicas del jugador',
    },
  },
  xml: {
    name: 'jugador',
  },
};

export const addJugador = {
  type: 'object',
  properties: {
    nombre: {
      type: 'string',
      description: 'Nombre del jugador',
    },
    apellidos: {
      type: 'string',
      description: 'Apellidos del jugador',
    },
    fechaNacimiento: {
      type: 'string',
      description: 'Fecha de nacimiento del jugador',
    },
    condicionesFisicas: {
      type: 'object',
      properties: {
        resistencia: {
          type: 'number',
          description: 'Resistencia del jugador',
        },

        velocidad: {
          type: 'number',
          description: 'Velocidad del jugador',
        },

        recuperacion: {
          type: 'number',
          description: 'Recuperación del jugador',
        },
      },
      description: 'Condiciones fisicas del jugador',
    },
  },
  xml: {
    name: 'jugador',
  },
};
