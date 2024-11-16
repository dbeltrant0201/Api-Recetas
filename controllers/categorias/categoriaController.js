import {
  queryAll,
  queryFind,
  queryCreate,
  queryUpdate,
  queryDelete
} from "../../db/categorias/categoriaQuery.js";

/**
* Obtener todas las categorías de la base de datos
*/
const allController = async (req, res) => {
  try {
      // Ejecutar la consulta en la base de datos
      const categorias = await queryAll();
      res.json(categorias);
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
* Obtener la categoría con el ID especificado en la query / url
* @param {*} req 
* @param {*} res 
*/
const findController = async (req, res) => {
  try {
      // Ejecutar la consulta en la base de datos
      const categoria = await queryFind(req.params.id);
      if (categoria) {
          res.json(categoria);
      } else {
          res.status(404).json({ mensaje: 'Categoría no encontrada' });
      }
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
* Crear una categoría
*/
const createController = async (req, res) => {
  try {
      const resultado = await queryCreate(req.body);
      res.json({ mensaje: 'Categoría creada con éxito', id: resultado.insertId });
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
* Actualizar los datos de una categoría
*/
const updateController = async (req, res) => {
  try {
      const resultado = await queryUpdate(req.params.id, req.body); // Se corrige el uso de req.body
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Categoría actualizada con éxito', categorias: resultado });
      } else {
          res.status(404).json({ mensaje: 'Categoría no encontrada' });
      }
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
* Eliminar una categoría
*/
const deleteController = async (req, res) => {
  try {
      const resultado = await queryDelete(req.params.id);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Categoría eliminada con éxito' });
      } else {
          res.status(404).json({ mensaje: 'Categoría no encontrada' });
      }
  } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar la categoría', error: error.message });
  }
};

export {
  allController,
  findController,
  createController,
  updateController,
  deleteController
};
