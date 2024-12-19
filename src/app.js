import express from 'express';
import employeesRoutes from './routes/employees.routes.js';
import { PORT } from './config.js';

const app = express();

app.use(express.json());

app.use('/api/employees',employeesRoutes);

app.use((req, res , next) => {
	res.status(404).json({ message:'Endpoint not found'});
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} - ` + new Date());
});
// Por alguna razon, se pierde la coneccion en ese puerto 3000 y se cae el servidor.
// Para evitar que esto suceda, se puede agregar un manejador de errores para el evento 'error' del servidor.
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please use a different port.`);
    } else {
        console.error(`Server error: ${err}`);
    }
});