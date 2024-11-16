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
 * Cargar la lista de categorías
 */
const queryAll = () => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM categorias', (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Buscar una categoría por su ID (llave primaria)
 */
const queryFind = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM categorias WHERE id = ? LIMIT 1', [id], (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Guardar una nueva categoría
 */
const queryCreate = (categorias) => {
    const { nombre } = categorias;  // Se utiliza "nombre" en lugar de "titulo" y "completado"
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO categorias(nombre) VALUES (?)';
        config.query(sql, [nombre], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Actualizar una categoría por su ID
 */
const queryUpdate = (id, categorias) => {
    const { nombre } = categorias;  // Se corrige la desestructuración
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE categorias SET nombre = ? WHERE id = ?';  // Se elimina la coma extra
        config.query(sql, [nombre, id], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Eliminar una categoría por su ID
 */
const queryDelete = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM categorias WHERE id = ?';
        config.query(sql, [id], (err, result) => {
            respuesta(err, result, resolve, reject);
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
