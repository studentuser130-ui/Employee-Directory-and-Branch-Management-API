import { Request, Response } from "express";
import {
  getAllBranches,
  getBranchById,
  createBranch,
  updateBranch,
  deleteBranch
} from "../services/branchService";

// GET /branches
export const getBranches = (_req: Request, res: Response) => {
  res.status(200).json(getAllBranches());
};

// GET /branches/:id
export const getBranch = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const branch = getBranchById(id);

  if (!branch) {
    res.status(404).json({ message: "Branch not found" });
    return;
  }

  res.status(200).json(branch);
};

// POST /branches
export const addBranch = (req: Request, res: Response) => {
  const { name, address, phone } = req.body;

  if (!name || !address || !phone) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  const newBranch = createBranch({ name, address, phone });
  res.status(201).json(newBranch);
};

// PUT /branches/:id
export const updateBranchById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updated = updateBranch(id, req.body);

  if (!updated) {
    res.status(404).json({ message: "Branch not found" });
    return;
  }

  res.status(200).json(updated);
};

// DELETE /branches/:id
export const removeBranch = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const success = deleteBranch(id);

  if (!success) {
    res.status(404).json({ message: "Branch not found" });
    return;
  }

  res.status(200).json({ message: "Branch deleted successfully" });
};
