import { Router } from "express";
import { 
	getEmployees, 
	getEmployeesWithDepartments,
    getEmployeesByDepartment,
    countEmployeesByDepartment,
    averageSalaryByDepartment,
    getEmployeesWithSalaryAbove,
	getEmployeeById, 
	createEmployee, 
	updateEmployee, 
	deleteEmployee
} from "../controllers/employees.controller.js";

const router = Router();

router.get('/', getEmployees);
router.get('/with-departments', getEmployeesWithDepartments); // empleados y sus departamentos
router.get('/department/:departmentName', getEmployeesByDepartment); // empleados por departamento
router.get('/count-by-department', countEmployeesByDepartment); // contar empleados por departamento
router.get('/average-salary-by-department', averageSalaryByDepartment); // salario promedio por departamento
router.get('/salary-above/:amount', getEmployeesWithSalaryAbove); // empleados con salario mayor a un valor especifico
router.get('/:id', getEmployeeById);
router.post('/', createEmployee);
router.delete('/:id', deleteEmployee);
router.put('/:id', updateEmployee);



export default router;