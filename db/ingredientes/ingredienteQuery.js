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
 * Carga la lista de ingredientes
 */
const queryAll = () => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM ingredientes', (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Buscar un ingrediente por su ID (llave primaria)
 */
const queryFind = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM ingredientes WHERE id = ? LIMIT 1', [id], (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });
    });
};

/**
 * Guardar un nuevo ingrediente
 */
const queryCreate = async (ingredientes) => {
    const { nombre } = ingredientes; 
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO ingredientes(nombre) VALUES (?)';
        config.query(sql, [nombre], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Actualizar un ingrediente por su ID
 */
const queryUpdate = (id, ingredientes) => {
    const { nombre } = ingredientes; 
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE ingredientes SET nombre = ? WHERE id = ?'; 
        config.query(sql, [nombre, id], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });
    });
};

/**
 * Eliminar un ingrediente por su ID
 */
const queryDelete = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM ingredientes WHERE id = ?';
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
