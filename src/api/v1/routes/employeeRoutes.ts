import { Router } from "express";
import {
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployeeById,
  removeEmployee,
  getEmployeesForBranch,
  getEmployeesForDepartment
} from "../controllers/employeeController";

const router = Router();

// Logical routes FIRST
router.get("/branch/:branchId", getEmployeesForBranch);
router.get("/department/:department", getEmployeesForDepartment);

// CRUD routes
router.get("/", getEmployees);
router.get("/:id", getEmployee);
router.post("/", addEmployee);
router.put("/:id", updateEmployeeById);
router.delete("/:id", removeEmployee);

export default router;
