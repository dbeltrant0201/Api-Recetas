import config from '../../config.js';

// Función que ayuda a manejar la respuesta de la base de datos
const respuesta = (err, result, resolve, reject) => {
    if (err) {
        console.log(err);
        reject(err);
    } else {
        resolve(result);
    }
};

/**
 * Carga la lista de recetas
 */
const queryAll = () => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM recetas', (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Buscar una receta por su ID (llave primaria)
 */
const queryFind = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM recetas WHERE id = ? LIMIT 1', [id], (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Guardar una nueva receta
 */
const queryCreate = (recetas) => {
    const { titulo } = recetas; // Cambiar a titulo
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO recetas(nombre) VALUES (?)'; // Corregir para usar 'titulo'
        config.query(sql, [titulo], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Actualizar una receta por su ID
 */
const queryUpdate = (id, recetas) => {
    const { titulo } = recetas; // Cambiar a titulo
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE recetas SET nombre = ? WHERE id = ?'; // Eliminar la coma extra
        config.query(sql, [titulo, id], (err, resultado) => { // Incluir id
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Eliminar una receta por su ID
 */
const queryDelete = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM recetas WHERE id = ?'; // Cambiar a id
        config.query(sql, [id], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    queryAll,
    queryFind,
    queryCreate,
    queryUpdate,
    queryDelete
};
