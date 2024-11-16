import { Router } from 'express';
//import verifytoken from '../middleware.js';
import {
    allController,
    findController,
    createController,
    updateController,
    deleteController,
} from '../../controllers/categorias/categoriaController.js';

const categoriasRouter = Router();

// Rutas para la entidad de categorías
categoriasRouter.get('/', allController); // Obtener todas las categorías
categoriasRouter.get('/:id', findController); // Obtener una categoría por ID
categoriasRouter.post('/', createController); // Crear una nueva categoría
categoriasRouter.put('/:id', updateController); // Actualizar una categoría por ID
categoriasRouter.delete('/:id', deleteController); // Eliminar una categoría por ID

export default categoriasRouter;
