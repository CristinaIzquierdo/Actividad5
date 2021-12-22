import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { Jugador } from './Jugador.js';
import { Ejercicio } from './Ejercicio.js';

const EntrenamientoSchema = new Schema({
  fecha: Date,
  ejercicios: [{ type: Schema.Types.ObjectId, ref: Ejercicio }],
  asistentes: [{ type: Schema.Types.ObjectId, ref: Jugador }],
});
const Entrenamiento = mongoose.model('Entrenamiento', EntrenamientoSchema);
export { Entrenamiento };
