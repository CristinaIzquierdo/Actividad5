import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const JugadorSchema = new Schema({
  dni: String,
  nombre: String,
  apellidos: String,
  fechaNacimiento: { type: Date },
  condicionesFisicas: {
    resistencia: Number,
    velocidad: Number,
    recuperacion: Number,
  },
});
const Jugador = mongoose.model('Jugador', JugadorSchema);
export { Jugador };
