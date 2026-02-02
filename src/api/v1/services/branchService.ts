import { branches, Branch } from "../../../data/branches";

// Get all branches
export const getAllBranches = (): Branch[] => {
  return branches;
};

// Get branch by ID
export const getBranchById = (id: number): Branch | undefined => {
  return branches.find(branch => branch.id === id);
};

// Create branch
export const createBranch = (data: Omit<Branch, "id">): Branch => {
  const newBranch: Branch = {
    id: branches.length + 1,
    ...data
  };

  branches.push(newBranch);
  return newBranch;
};

// Update branch
export const updateBranch = (
  id: number,
  updates: Partial<Branch>
): Branch | null => {
  const index = branches.findIndex(branch => branch.id === id);
  if (index === -1) return null;

  branches[index] = { ...branches[index], ...updates };
  return branches[index];
};

// Delete branch
export const deleteBranch = (id: number): boolean => {
  const index = branches.findIndex(branch => branch.id === id);
  if (index === -1) return false;

  branches.splice(index, 1);
  return true;
};
