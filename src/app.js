import express from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use('/api/employees', employeesRoutes);

const PORT = 3000;
app.listen(PORT ,() => {
	  console.log(`Server is running on port ${PORT} - `+ new Date());
})