import {
  queryAll,
  queryFind,
  queryCreate,
  queryUpdate,
  queryDelete
} from "../../db/categorias/categoriaQuery.js";

/**
 * Obtener todos los ingredientes de la base de datos
 */
const allController = async (req, res) => {
  try {
    // Ejecutar la consulta en la base de datos
    const ingredientes = await queryAll();
    res.json(ingredientes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los ingredientes', error: error.message });
  }
};

/**
 * Obtener los ingredientes con el ID especificado en la query / url
 * @param {*} req 
 * @param {*} res 
 */
const findController = async (req, res) => { 
  try {
    // Ejecutar la consulta en la base de datos
    const ingredientes = await queryFind(req.params.id);
    if (ingredientes) {
      res.json(ingredientes);
    } else {
      res.status(404).json({ mensaje: 'Ingrediente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el ingrediente', error: error.message });
  }
};

/**
 * Crear un ingrediente
 */
const createController = async (req, res) => {
  try {
    const resultado = await queryCreate(req.body);
    res.json({ mensaje: 'Ingrediente creado con éxito', id: resultado.insertId });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el ingrediente', error: error.message });
  }
};

/**
 * Actualizar los datos de ingredientes
 */
const updateController = async (req, res) => {
  try {
    const resultado = await queryUpdate(req.params.id, req.body); // Se usa req.body
    if (resultado.affectedRows > 0) {
      res.json({ mensaje: 'Ingrediente actualizado con éxito', ingredientes: resultado });
    } else {
      res.status(404).json({ mensaje: 'Ingrediente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el ingrediente', error: error.message });
  }
};

/**
 * Eliminar ingrediente
 */
const deleteController = async (req, res) => {
  try {
    const resultado = await queryDelete(req.params.id);
    if (resultado.affectedRows > 0) {
      res.json({ mensaje: 'Ingrediente eliminado con éxito' });
    } else {
      res.status(404).json({ mensaje: 'Ingrediente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el ingrediente', error: error.message });
  }
};

export {
  allController,
  findController,
  createController,
  updateController,
  deleteController
};
