import request from "supertest";
import app from "../app";
import { AppDataSource } from "../data-source";
import { Task } from "../entity/Task";

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

beforeEach(async () => {
  // Clear data between tests
  const repo = AppDataSource.getRepository(Task);
  await repo.clear();
});

describe("Task CRUD", () => {
  it("should create a task", async () => {
    const res = await request(app).post("/api/tasks").send({
      title: "task1",
      description: "task1",
      updated_at: "2025-06-23T16:16:44.454Z",
      status: "completed",
      severity: "minor",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.title).toBe("task1");
  });

  it("should get tasks", async () => {
    const repo = AppDataSource.getRepository(Task);
    await repo.save(
      repo.create({
        title: "task1",
        description: "task1",
        updated_at: "2025-06-23T16:16:44.454Z",
        status: "completed",
        severity: "minor",
      })
    );

    const res = await request(app).get("/api/tasks");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(1);
    expect(res.body[0].title).toBe("task1");
  });

  it("should get one task", async () => {
    const res = await request(app).post("/api/tasks").send({
      title: "task1",
      description: "task1",
      updated_at: "2025-06-23T16:16:44.454Z",
      status: "completed",
      severity: "minor",
    });

    const id = res.body.id;
    const getRes = await request(app).get(`/api/tasks/${id}`);

    expect(getRes.body).toHaveProperty("id", id);
    expect(getRes.body.title).toBe("task1");
  });

  it("should delete one task", async () => {
    const res = await request(app).post("/api/tasks").send({
      title: "task1",
      description: "task1",
      updated_at: "2025-06-23T16:16:44.454Z",
      status: "completed",
      severity: "minor",
    });

    const id = res.body.id;
    await request(app).delete(`/api/tasks/${id}`);

    const res2 = await request(app).get("/api/tasks");

    expect(res2.statusCode).toBe(200);
    expect(res2.body.length).toBe(0);
  });

  it("should update one task", async () => {
    const res = await request(app).post("/api/tasks").send({
      title: "task1",
      description: "task1",
      updated_at: "2025-06-23T16:16:44.454Z",
      status: "completed",
      severity: "minor",
    });

    const id = res.body.id;
    const getRes = await request(app).get(`/api/tasks/${id}`);

    expect(getRes.body).toHaveProperty("id", id);
    expect(getRes.body.title).toBe("task1");

    const updateRes = await request(app)
      .put("/api/tasks/" + id)
      .send({
        title: "task2",
        description: "task1",
        updated_at: "2025-06-23T16:16:44.454Z",
        status: "completed",
        severity: "minor",
      });

    expect(updateRes.body.title).toBe("task2");
  });
});
