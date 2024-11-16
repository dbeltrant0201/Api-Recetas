import { Router } from 'express';
// import verifytoken from '../middleware.js'; 
import {
    allController,
    findController,
    createController,
    updateController,
    deleteController,
} from '../../controllers/categorias/categoriaController.js';

const ingredientesRouter = Router();

// Rutas para la entidad de ingredientes
ingredientesRouter.get('/', allController); // Obtener todos los ingredientes
ingredientesRouter.get('/:id', findController); // Obtener un ingrediente por ID
ingredientesRouter.post('/', createController); // Crear un nuevo ingrediente
ingredientesRouter.put('/:id', updateController); // Actualizar un ingrediente por ID
ingredientesRouter.delete('/:id', deleteController); // Eliminar un ingrediente por ID

export default ingredientesRouter; 