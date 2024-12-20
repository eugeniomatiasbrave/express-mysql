import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    console.log(req.body);
    res.send({ id: rows.insertId, name, salary });
  } catch (error) {
    res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [id]);

    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(204).send("DELETE employees");
  } catch (error) {
    res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE employee SET name = ?, salary = ? WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json({ id, name, salary });
  } catch (error) {
    res.status(500).json({ message: "Something goes wrong" });
  }
};


export const getEmployeesWithDepartments = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT e.id, e.name, e.salary, d.name AS department
      FROM employee e
      JOIN departments d ON e.department_id = d.id
    `);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getEmployeesByDepartment = async (req, res) => {
  const { departmentName } = req.params;
  try {
    const [rows] = await pool.query(`
      SELECT e.id, e.name, e.salary
      FROM employee e
      JOIN departments d ON e.department_id = d.id
      WHERE d.name = ?
    `, [departmentName]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Something goes wrong" });
  }
};

export const countEmployeesByDepartment = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT d.name AS department, COUNT(e.id) AS employee_count
      FROM departments d
      LEFT JOIN employee e ON e.department_id = d.id
      GROUP BY d.name
    `);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Something goes wrong" });
  }
};

export const averageSalaryByDepartment = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT d.name AS department, AVG(e.salary) AS average_salary
      FROM departments d
      LEFT JOIN employee e ON e.department_id = d.id
      GROUP BY d.name
    `);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getEmployeesWithSalaryAbove = async (req, res) => {
  const { amount } = req.params;
  try {
    const [rows] = await pool.query(`
      SELECT e.id, e.name, e.salary, d.name AS department
      FROM employee e
      JOIN departments d ON e.department_id = d.id
      WHERE e.salary > ?
    `, [amount]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Something goes wrong" });
  }
};
