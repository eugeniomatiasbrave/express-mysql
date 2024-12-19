
import { pool } from '../db.js';

export const getEmployees = async (req, res) => {
	const [rows] = await pool.query('SELECT * FROM employee');
	res.json(rows);
};

export const getEmployeeById = async (req, res) => {
	const { id } = req.params;
	const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);

    if (rows.length <= 0) { 
		return res.status(404).json({ message: 'Employee not found' }); 
	}
	res.json(rows); 
};

export const createEmployee = async (req, res) => {
	const { name, salary } = req.body;
	const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', 
		[name, salary]);
	console.log(req.body);
	res.send({ id: rows.insertId, name, salary });
};

export const deleteEmployee = async (req, res) => {
	const { id } = req.params;
	const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [id]);

	if (result.affectedRows <= 0) {
		return res.status(404).json({ message: 'Employee not found' });
	}
	res.status(204).send('DELETE employees');
};


export const updateEmployee = async (req, res) => {
	const { id } = req.params;
	const { name, salary } = req.body;
	const [result] = await pool.query('UPDATE employee SET name = ?, salary = ? WHERE id = ?', 
		[name, salary, id]);

	if (result.affectedRows === 0) {
		return res.status(404).json({ message: 'Employee not found' });
	}
	res.json({ id, name, salary });
	
};

