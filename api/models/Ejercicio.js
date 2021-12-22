import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const EjercicioSchema = new Schema({
  titulo: String,
  descripcion: String,
  etiquetas: [String],
  duracion: Number,
  dureza: {
    resistencia: Number,
    velocidad: Number,
    recuperacion: Number,
  },
  materialesNecesarios: [String],
  recursosMultimedia: [String],
});
const Ejercicio = mongoose.model('Ejercicio', EjercicioSchema);
export { Ejercicio };
