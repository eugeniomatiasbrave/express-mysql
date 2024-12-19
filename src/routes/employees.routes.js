import { Router } from "express";
import { getEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } from "../controllers/employees.controller.js";

const router = Router();

router.get('/', getEmployees);

router.get('/:id', getEmployeeById);

router.post('/', createEmployee);

router.delete('/:id', deleteEmployee);

router.put('/:id', updateEmployee);


export default router;