import {
  queryAll,
  queryFind,
  queryCreate,
  queryUpdate,
  queryDelete
} from "../../db/categorias/categoriaQuery.js";

/**
* Obtener todas las recetas de la base de datos
*/
const allController = async (req, res) => {
  try {
      const recetas = await queryAll();
      res.json(recetas);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

/**
* Obtener la receta con el ID especificado en la query / url
* @param {*} req 
* @param {*} res 
*/
const findController = async (req, res) => {
  try {
      const receta = await queryFind(req.params.id);
      if (receta) {
          res.json(receta);
      } else {
          res.status(404).json({ mensaje: 'receta no encontrada' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

/**
* Crear una receta
*/
const createController = async (req, res) => {
  try {
      const resultado = await queryCreate(req.body);
      res.json({ mensaje: 'receta creada con éxito', id: resultado.insertId });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

/**
* Actualizar los datos de una receta
*/
const updateController = async (req, res) => {
  try {
      const resultado = await queryUpdate(req.params.id, req.body); 
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'receta actualizada con éxito', recetas: resultado });
      } else {
          res.status(404).json({ mensaje: 'receta no encontrada' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

/**
* Eliminar receta
*/
const deleteController = async (req, res) => {
  try {
      const resultado = await queryDelete(req.params.id);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'receta eliminada con éxito' });
      } else {
          res.status(404).json({ mensaje: 'receta no encontrada' });
      }
  } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar la receta', error: error.message });
  }
};

export {
  allController,
  findController,
  createController,
  updateController,
  deleteController
};
