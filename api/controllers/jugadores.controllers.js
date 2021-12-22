import { Jugador } from '../models/Jugador.js';

const getAll = (req, res) => {
  Jugador.find({}, (err, data) => {
    err ? res.send(err) : res.send(data);
  });
};
const get = (req, res) => {
  Jugador.findOne({ dni: req.params.id }, (err, data) => {
    err ? res.send(err) : res.send(data);
  });
};
const add = (req, res) => {
  const jugador = new Jugador(req.body);
  jugador.save((err, data) => {
    err ? res.send(err) : res.send(data);
  });
};
//actualiza los datos de un jugador por dni
const update = (req, res) => {
  const valores = {
    $set: {
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      fechaNacimiento: req.body.fechaNacimiento,
      condicionesFisicas: req.body.condicionesFisicas,
    },
  };
  Jugador.updateOne({ dni: req.params.id }, valores, (err, data) => {
    err ? res.send(err) : res.send(data);
  });
};

export { getAll, get, add, update };
