import request from "supertest";
import app from "../src/app";

describe("Branch API", () => {

});
//Creating Branch
describe("POST /api/v1/branches", () => {

  it("should create a new branch successfully", async () => {
    const newBranch = {
      name: "Test Branch",
      address: "123 Test Street, Test City",
      phone: "111-222-3333"
    };

    const response = await request(app)
      .post("/api/v1/branches")
      .send(newBranch);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Test Branch");
  });

  it("should fail when required fields are missing", async () => {
    const response = await request(app)
      .post("/api/v1/branches")
      .send({});

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
  });

  // Test : Get All Branches
  describe("GET /api/v1/branches", () => {

  it("should return an array of all branches", async () => {
    const response = await request(app)
      .get("/api/v1/branches");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

});
//Test : Get Branch by ID
describe("GET /api/v1/branches/:id", () => {

  it("should return a branch for a valid ID", async () => {
    const allBranches = await request(app).get("/api/v1/branches");
    const branchId = allBranches.body[0].id;

    const response = await request(app)
      .get(`/api/v1/branches/${branchId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", branchId);
  });

  it("should return 404 for a non-existing branch ID", async () => {
    const response = await request(app)
      .get("/api/v1/branches/99999");

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });

});
//Test : Update Branch
describe("PUT /api/v1/branches/:id", () => {

  it("should update a branch successfully", async () => {
    const allBranches = await request(app).get("/api/v1/branches");
    const branchId = allBranches.body[0].id;

    const response = await request(app)
      .put(`/api/v1/branches/${branchId}`)
      .send({ phone: "999-888-7777" });

    expect(response.status).toBe(200);
    expect(response.body.phone).toBe("999-888-7777");
  });

  it("should return 404 when updating a non-existing branch", async () => {
    const response = await request(app)
      .put("/api/v1/branches/99999")
      .send({ phone: "000-000-0000" });

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });

});
//Test : Delete Branch
describe("DELETE /api/v1/branches/:id", () => {

  it("should delete a branch successfully", async () => {
    const allBranches = await request(app).get("/api/v1/branches");
    const branchId = allBranches.body[0].id;

    const response = await request(app)
      .delete(`/api/v1/branches/${branchId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
  });

  it("should return 404 for non-existing branch", async () => {
    const response = await request(app)
      .delete("/api/v1/branches/99999");

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });

});


});
