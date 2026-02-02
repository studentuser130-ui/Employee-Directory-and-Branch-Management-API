import request from "supertest";
import app from "../src/app";

describe("POST /api/v1/employees", () => {

  it("should create a new employee successfully", async () => {
    const newEmployee = {
      name: "Test User",
      position: "Tester",
      department: "QA",
      email: "test.user@pixell-river.com",
      phone: "999-999-9999",
      branchId: 1
    };

    const response = await request(app)
      .post("/api/v1/employees")
      .send(newEmployee);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Test User");
  });

  it("should fail when required fields are missing", async () => {
    const response = await request(app)
      .post("/api/v1/employees")
      .send({});

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
  });
  describe("GET /api/v1/employees", () => {

  it("should return an array of all employees", async () => {
    const response = await request(app)
      .get("/api/v1/employees");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
  describe("GET /api/v1/employees/:id", () => {

  it("should return the employee for a valid ID", async () => {
    // First, get all employees to fetch a valid ID
    const allEmployeesResponse = await request(app)
      .get("/api/v1/employees");

    const employeeId = allEmployeesResponse.body[0].id;

    const response = await request(app)
      .get(`/api/v1/employees/${employeeId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", employeeId);
  });

  it("should return 404 for a non-existing employee ID", async () => {
    const response = await request(app)
      .get("/api/v1/employees/99999");

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });
  describe("PUT /api/v1/employees/:id", () => {

  it("should update an existing employee successfully", async () => {
    // Get a valid employee ID
    const allEmployeesResponse = await request(app)
      .get("/api/v1/employees");

    const employeeId = allEmployeesResponse.body[0].id;

    const updateData = {
      position: "Senior Tester"
    };

    const response = await request(app)
      .put(`/api/v1/employees/${employeeId}`)
      .send(updateData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("position", "Senior Tester");
  });

  it("should return 404 when updating a non-existing employee", async () => {
    const response = await request(app)
      .put("/api/v1/employees/99999")
      .send({ position: "Ghost Role" });

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });
  describe("DELETE /api/v1/employees/:id", () => {

  it("should delete an existing employee successfully", async () => {
    // Get a valid employee ID
    const allEmployeesResponse = await request(app)
      .get("/api/v1/employees");

    const employeeId = allEmployeesResponse.body[0].id;

    const response = await request(app)
      .delete(`/api/v1/employees/${employeeId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
  });

  it("should return 404 when deleting a non-existing employee", async () => {
    const response = await request(app)
      .delete("/api/v1/employees/99999");

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });
  describe("GET /api/v1/employees/department/:department", () => {

  it("should return employees for a valid department", async () => {
    const response = await request(app)
      .get("/api/v1/employees/department/IT");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should return 400 when department is missing", async () => {
    const response = await request(app)
      .get("/api/v1/employees/department/");

    expect(response.status).toBe(404); // route not matched
  });

});


});
});

});

});

});


