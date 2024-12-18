import express from 'express';
import { pool } from './db.js';


const app = express();

app.get('/ping',  async (req, res) => {
	const [result] = await pool.query("SELECT 1 + 1 AS solution")
	res.json(result[0]);
});

const PORT = 8080;
app.listen(PORT ,() => {
	  console.log(`Server is running on port ${PORT} - `+ new Date());
})