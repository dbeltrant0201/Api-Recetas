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
 * Carga la lista de procedimientos
 */
const queryAll = () => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM procedimientos', (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Buscar un procedimiento por su ID (llave primaria)
 */
const queryFind = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM procedimientos WHERE id = ? LIMIT 1', [id], (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Guardar un nuevo procedimiento
 */
const queryCreate = async (procedimiento) => { // Cambiado a 'procedimiento'
    const { titulo, completado } = procedimiento; // Cambiado a 'procedimiento'
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO procedimientos(titulo, completado) VALUES (?, ?)';
        config.query(sql, [titulo, completado], (err, resultado) => { // Corregido a 'titulo'
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Actualizar un procedimiento por su ID
 */
const queryUpdate = (id, procedimiento) => { // Cambiado a 'procedimiento'
    const { titulo, completado } = procedimiento; // Cambiado a 'procedimiento'
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE procedimientos SET titulo = ?, completado = ? WHERE id = ?'; // Corregido
        config.query(sql, [titulo, completado, id], (err, resultado) => { // Corregido a 'titulo'
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Eliminar un procedimiento por su ID
 */
const queryDelete = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM procedimientos WHERE id = ?';
        config.query(sql, [id], (err, resultado) => { // Cambiado a 'id'
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
