import { ejercicio } from './schemas/ejercicios.schema.js';
import { jugador } from './schemas/jugadores.schema.js';
import { entrenamiento } from './schemas/entrenamientos.schema.js';
import { ejerciciosPath } from './paths/ejercicios/ejercicios.path.js';
import { ejerciciosIdPath } from './paths/ejercicios/ejerciciosId.path.js';
import { entrenamientosPath } from './paths/entrenamientos/entrenamientos.path.js';
import { entrenamientosIdPath } from './paths/entrenamientos/entrenamientosId.path.js';
import { jugadoresPath } from './paths/jugadores/jugadores.path.js';
import { jugadoresIdPath } from './paths/jugadores/jugadoresId.path.js';

const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    description:
      'Aplicación de gestión de jugadores, ejercicios y entrenamientos.',
    version: '1.0.0',
    title: 'API entrenamientos CPIFPPirámide',
    contact: {
      email: 'cristinaizquierdo2000@gmail.com',
    },
    license: {
      name: 'ISC',
      url: 'https://opensource.org/licenses/ISC',
    },
  },
  host: 'localhost:8080',
  basePath: '/api/v.01/',
  tags: [
    {
      name: 'jugador',
      description: 'Operaciones de jugadores',
      externalDocs: {
        description: 'Base address',
        url: 'http://localhost:8080/api/v.01/jugadores',
      },
    },
    {
      name: 'entrenamiento',
      description: 'Operaciones de entrenamientos',
      externalDocs: {
        description: 'Base address',
        url: 'http://localhost:8080/api/v.01/entrenamientos',
      },
    },
    {
      name: 'ejercicio',
      description: 'Operaciones de ejercicios',
      externalDocs: {
        description: 'Base address',
        url: 'http://localhost:8080/api/v.01/ejercicios',
      },
    },
  ],
  servers: [
    {
      url: 'http://localhost:8080/api/v.01/',
    },
  ],
  paths: {
    '/ejercicios': ejerciciosPath,
    '/ejercicios/{_id}': ejerciciosIdPath,
    '/entrenamientos': entrenamientosPath,
    '/entrenamientos/{_id}': entrenamientosIdPath,
    '/jugadores': jugadoresPath,
    '/jugadores/{_id}': jugadoresIdPath,
  },
  components: {
    schemas: {
      Jugador: jugador,
      Entrenamiento: entrenamiento,
      Ejercicio: ejercicio,
    },
  },
};

export { swaggerDocument };
