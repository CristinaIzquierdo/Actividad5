import { Ejercicio } from '../models/Ejercicio.js';

const getAll = (req, res) => {
  Ejercicio.find({}, (err, data) => {
    err ? res.send(err) : res.send(data);
  });
};
const get = (req, res) => {
  Ejercicio.findOne({ _id: req.params.id }, (err, data) => {
    err ? res.send(err) : res.send(data);
  });
};
const add = (req, res) => {
  const ejercicio = new Ejercicio(req.body);
  ejercicio.save((err, data) => {
    err ? res.send(err) : res.send(data);
  });
};
//actualiza los datos de un ejercicio por id
const update = (req, res) => {
  const valores = {
    $set: {
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      etiquetas: req.body.etiquetas,
      duracion: req.body.duracion,
      dureza: req.body.dureza,
      materialesNecesarios: req.body.materialesNecesarios,
      recursosMultimedia: req.body.recursosMultimedia,
    },
  };
  Ejercicio.updateOne({ _id: req.params.id }, valores, (err, data) => {
    err ? res.send(err) : res.send(data);
  });
};

export { getAll, get, add, update };
