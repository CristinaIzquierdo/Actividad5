import { Entrenamiento } from '../models/Entrenamiento.js';

const getAll = (req, res) => {
  Entrenamiento.find({}, { date: 1 }, (err, data) => {
    err ? res.send(err) : res.send(data);
  });
};
//Thanks @GabySanchez for the help with this function :D
const get = (req, res) => {
  Entrenamiento.findOne({ _id: req.params.id })
    .populate('ejercicios')
    .populate('asistentes')
    .exec((err, data) => {
      let resistencia = 0;
      let velocidad = 0;
      let recuperacion = 0;
      data.ejercicios.forEach((ejercicios) => {
        resistencia += ejercicios.dureza.resistencia;
        velocidad += ejercicios.dureza.velocidad;
        recuperacion += ejercicios.dureza.recuperacion;
      });
      const resistenciaMedia = resistencia / data.ejercicios.length;
      const velocidadMedia = velocidad / data.ejercicios.length;
      const recuperacionMedia = recuperacion / data.ejercicios.length;
      const durezaMedia =
        (resistenciaMedia + velocidadMedia + recuperacionMedia) / 3;
      const objeto = {
        _id: data._id,
        fecha: data.fecha,
        durezaMedia: durezaMedia,
        ejercicios: data.ejercicios,
        asistentes: data.asistentes,
      };
      err ? res.send(err) : res.send(objeto);
    });
};
const add = (req, res) => {
  const entrenamiento = new Entrenamiento(req.body);
  entrenamiento.save((err, data) => {
    err ? res.send(err) : res.send(data);
  });
};
const update = (req, res) => {
  const valores = {
    $set: {
      asistentes: req.body.asistentes,
    },
  };
  Entrenamiento.updateOne({ _id: req.params.id }, valores, (err, data) => {
    err ? res.send(err) : res.send(data);
  });
};
const remove = (req, res) => {
  Entrenamiento.deleteOne({ _id: req.params.id }, (err, data) => {
    err ? res.send(err) : res.send(data);
  });
};

export { getAll, get, add, update, remove };
