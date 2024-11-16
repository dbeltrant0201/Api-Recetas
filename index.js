import express from 'express';
import cors from 'cors';

// Carga las variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// Importar las rutas
import categoriasRoutes from './routes/categorias/categoriasRoutes.js';

// Crear la app de express
const app = express();

// Habilitar la captura de datos mediante POST / formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar CORS
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    exposedHeaders: 'Content-Length, X-Knowledge', 
    allowedHeaders: 'Content-Type, Authorization', 
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
};

// Aplicar CORS globalmente
app.use(cors(corsOptions));

// Configuración del puerto
const port = process.env.PORT || 3000; // Usar puerto de entorno si está disponible

// Uso de rutas
app.use('/categorias', categoriasRoutes); // Rutas de categorías

// Levantar el servidor en el puerto configurado
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
