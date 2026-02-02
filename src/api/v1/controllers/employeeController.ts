import { Request, Response } from "express";
import {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeesByBranch,
  getEmployeesByDepartment
} from "../services/employeeService";

// GET /employees
export const getEmployees = (_req: Request, res: Response) => {
  res.status(200).json(getAllEmployees());
};

// GET /employees/:id
export const getEmployee = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const employee = getEmployeeById(id);

  if (!employee) {
    res.status(404).json({ message: "Employee not found" });
    return;
  }

  res.status(200).json(employee);
};

// POST /employees
export const addEmployee = (req: Request, res: Response) => {
  const { name, position, department, email, phone, branchId } = req.body;

  if (!name || !position || !department || !email || !phone || !branchId) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  const newEmployee = createEmployee({
    name,
    position,
    department,
    email,
    phone,
    branchId
  });

  res.status(201).json(newEmployee);
};

// PUT /employees/:id
export const updateEmployeeById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updated = updateEmployee(id, req.body);

  if (!updated) {
    res.status(404).json({ message: "Employee not found" });
    return;
  }

  res.status(200).json(updated);
};

// DELETE /employees/:id
export const removeEmployee = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const success = deleteEmployee(id);

  if (!success) {
    res.status(404).json({ message: "Employee not found" });
    return;
  }

  res.status(200).json({ message: "Employee deleted successfully" });
};

// GET /employees/branch/:branchId
export const getEmployeesForBranch = (req: Request, res: Response) => {
  const branchId = Number(req.params.branchId);

  if (!branchId) {
    res.status(400).json({ message: "Branch ID is required" });
    return;
  }

  res.status(200).json(getEmployeesByBranch(branchId));
};

// GET /employees/department/:department
export const getEmployeesForDepartment = (req: Request, res: Response) => {
  const department: string = req.params.department as string;

  if (!department) {
    res.status(400).json({ message: "Department is required" });
    return;
  }

  res.status(200).json(getEmployeesByDepartment(department));
};

