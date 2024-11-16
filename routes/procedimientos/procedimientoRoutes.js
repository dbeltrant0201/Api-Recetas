import { Router } from 'express';
import {
    allController,
    findController,
    createController,
    updateController,
    deleteController,
} from '../../controllers/categorias/categoriaController.js';

const procedimientosRouter = Router();

// Rutas para la entidad de procedimientos
procedimientosRouter.get('/', allController); // Obtener todos los procedimientos
procedimientosRouter.get('/:id', findController); // Obtener un procedimiento por ID
procedimientosRouter.post('/', createController); // Crear un nuevo procedimiento
procedimientosRouter.put('/:id', updateController); // Actualizar un procedimiento por ID
procedimientosRouter.delete('/:id', deleteController); // Eliminar un procedimiento por ID

export default procedimientosRouter; 
