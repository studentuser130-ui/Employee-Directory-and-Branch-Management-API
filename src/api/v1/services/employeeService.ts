import { employees, Employee } from "../../../data/employees";

// Get all employees
export const getAllEmployees = (): Employee[] => {
  return employees;
};

// Get employee by ID
export const getEmployeeById = (id: number): Employee | undefined => {
  return employees.find(emp => emp.id === id);
};

// Create employee
export const createEmployee = (data: Omit<Employee, "id">): Employee => {
  const newEmployee: Employee = {
    id: employees.length + 1,
    ...data
  };

  employees.push(newEmployee);
  return newEmployee;
};

// Update employee
export const updateEmployee = (
  id: number,
  updates: Partial<Employee>
): Employee | null => {
  const index = employees.findIndex(emp => emp.id === id);
  if (index === -1) return null;

  employees[index] = { ...employees[index], ...updates };
  return employees[index];
};

// Delete employee
export const deleteEmployee = (id: number): boolean => {
  const index = employees.findIndex(emp => emp.id === id);
  if (index === -1) return false;

  employees.splice(index, 1);
  return true;
};

// Logical operations (for later endpoints)

// Get employees by branch
export const getEmployeesByBranch = (branchId: number): Employee[] => {
  return employees.filter(emp => emp.branchId === branchId);
};

// Get employees by department
export const getEmployeesByDepartment = (department: string): Employee[] => {
  return employees.filter(
    emp => emp.department.toLowerCase() === department.toLowerCase()
  );
};
