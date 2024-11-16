import { Router } from 'express';
// import verifytoken from '../middleware.js';
import {
    allController,
    findController,
    createController,
    updateController,
    deleteController,
} from '../../controllers/categorias/categoriaController.js';

const recetasRouter = Router();

// Rutas para la entidad de recetas
recetasRouter.get('/', allController); // Obtener todas las recetas
recetasRouter.get('/:id', findController); // Obtener receta por ID
recetasRouter.post('/', createController); // Crear una nueva receta
recetasRouter.put('/:id', updateController); // Actualizar una receta existente
recetasRouter.delete('/:id', deleteController); // Eliminar receta por ID

export default recetasRouter; 
