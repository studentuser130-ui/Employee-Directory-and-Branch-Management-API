import express from "express";
import morgan from "morgan";
import employeeRoutes from "./api/v1/routes/employeeRoutes";
import branchRoutes from "./api/v1/routes/branchRoutes";
import { notFoundHandler } from "./api/v1/middlewares/notFoundHandler";
import { errorHandler } from "./api/v1/middlewares/errorMiddleware";

const app = express();

// Core middleware
app.use(express.json());
app.use(morgan("combined"));

// Health check
app.get("/health", (_req, res) => {
  res.status(200).send("Server is healthy");
});

// API routes
app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/branches", branchRoutes);

// 404 handler (after routes)
app.use(notFoundHandler);

// Global error handler (LAST)
app.use(errorHandler);

export default app;
