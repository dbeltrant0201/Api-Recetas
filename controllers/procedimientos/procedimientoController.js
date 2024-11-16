import {
  queryAll,
  queryFind,
  queryCreate,
  queryUpdate,
  queryDelete
} from "../../db/categorias/categoriaQuery.js";

/**
* Obtener todos los procedimientos de la base de datos
*/
const allController = async (req, res) => {
  try {
      const procedimientos = await queryAll();
      res.json(procedimientos);
  } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener los procedimientos', error: error.message });
  }
};

/**
* Obtener la categoria con el ID especificado en la query / url
*/
const findController = async (req, res) => {
  try {
      const procedimiento = await queryFind(req.params.id);
      if (procedimiento) {
          res.json(procedimiento);
      } else {
          res.status(404).json({ mensaje: 'Procedimiento no encontrado' });
      }
  } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener el procedimiento', error: error.message });
  }
};

/**
* Crear un procedimiento
*/
const createController = async (req, res) => {
  try {
      const resultado = await queryCreate(req.body);
      res.status(201).json({ mensaje: 'Procedimiento creado con éxito', id: resultado.insertId });
  } catch (error) {
      res.status(500).json({ mensaje: 'Error al crear el procedimiento', error: error.message });
  }
};

/**
* Actualizar los datos de procedimientos
*/
const updateController = async (req, res) => {
  try {
      const resultado = await queryUpdate(req.params.id, req.body); // Cambiar datosprocedimientos por req.body
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Procedimiento actualizado con éxito', procedimiento: resultado });
      } else {
          res.status(404).json({ mensaje: 'Procedimiento no encontrado' });
      }
  } catch (error) {
      res.status(500).json({ mensaje: 'Error al actualizar el procedimiento', error: error.message });
  }
};

/**
* Eliminar procedimiento
*/
const deleteController = async (req, res) => {
  try {
      const resultado = await queryDelete(req.params.id);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Procedimiento eliminado con éxito' });
      } else {
          res.status(404).json({ mensaje: 'Procedimiento no encontrado' });
      }
  } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el procedimiento', error: error.message });
  }
};

export {
  allController,
  findController,
  createController,
  updateController,
  deleteController
};
