🧑‍💼 Employee Directory and Branch Management API

A RESTful backend API built with Node.js, Express, and TypeScript to manage employees and branch locations. The project follows REST principles, clean architecture, middleware handling, and automated testing using Jest.

📌 Overview

The API supports CRUD operations for employees and branches, along with logical endpoints to retrieve employees by branch or department. It uses in-memory datasets to focus on API design and testing rather than database persistence.

🎯 Objectives

Design RESTful API routes

Implement CRUD operations

Apply middleware for logging and error handling

Create logical data-based endpoints

Write automated tests using Jest & Supertest

🛠️ Tech Stack

Node.js

Express.js

TypeScript

Jest & Supertest

Morgan

📂 Project Structure

src/
 ├── api/v1/controllers
 ├── api/v1/services
 ├── api/v1/routes
 ├── api/v1/middlewares
 ├── data
 ├── app.ts
 └── server.ts
test/

🔗 API Endpoints
Employees

POST /api/v1/employees

GET /api/v1/employees

GET /api/v1/employees/:id

PUT /api/v1/employees/:id

DELETE /api/v1/employees/:id

Branches

POST /api/v1/branches

GET /api/v1/branches

GET /api/v1/branches/:id

PUT /api/v1/branches/:id

DELETE /api/v1/branches/:id

Logical Operations

GET /api/v1/employees/branch/:branchId

GET /api/v1/employees/department/:department

🧪 Testing

Automated tests cover:

Health check

Employee CRUD

Branch CRUD

Logical endpoints

Validation and error cases

Run tests:

npm test

▶️ Running the Project
npm install
npm run dev


Health check:

GET /health

🚧 Notes

Data is stored in-memory

Changes reset on server restart

Designed for academic evaluation

👤 Author

Debjit Roy
Employee Directory and Branch Management API

✅ Status

✔ Fully implemented
✔ Fully tested
✔ Ready for submission
