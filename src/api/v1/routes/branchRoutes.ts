import { Router } from "express";
import {
  getBranches,
  getBranch,
  addBranch,
  updateBranchById,
  removeBranch
} from "../controllers/branchController";

const router = Router();

router.get("/", getBranches);
router.get("/:id", getBranch);
router.post("/", addBranch);
router.put("/:id", updateBranchById);
router.delete("/:id", removeBranch);

export default router;
