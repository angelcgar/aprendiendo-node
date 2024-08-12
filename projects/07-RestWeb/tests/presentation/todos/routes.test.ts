import request from "supertest";
import { testServer } from "../../test-server";
import { prisma } from "../../../src/data/postgres";

describe("todo route testing", () => {
  beforeAll(async () => {
    await testServer.start();
  });

  afterAll(() => {
    testServer.close();
  });

  beforeEach(async () => {
    await prisma.todo.deleteMany();
  });

  const todo1 = { text: "hola mundo" };
  const todo2 = { text: "hola mundo2" };

  test("should get all todos api/todos", async () => {
    await prisma.todo.createMany({
      data: [todo1, todo2],
    });

    const { body } = await request(testServer.app)
      .get("/api/todos")
      .expect(200);

    expect(body).toBeInstanceOf(Array);
    expect(body.length).toBe(2);
    expect(body[0].text).toBe(todo1.text);
    expect(body[1].text).toBe(todo2.text);
  });

  test("should return a TODO api/todos:id", async () => {
    const todo = await prisma.todo.create({ data: todo1 });

    const { body } = await request(testServer.app)
      .get(`/api/todos/${todo.id}`)
      .expect(200);

    expect(body).toEqual({
      id: todo.id,
      text: todo.text,
      completedAt: todo.completedAt,
    });
  });

  test("should return a error if TODO api/todos:id not found", async () => {
    const todoId = 9999;
    const { body } = await request(testServer.app)
      .get(`/api/todos/${todoId}`)
      .expect(404);

    expect(body).toEqual({ error: `Todo with id ${todoId} not found` });
  });

  test("should return an error if text is preset api/todos", async () => {
    const { body } = await request(testServer.app)
      .post("/api/todos")
      .send({})
      .expect(400);

    expect(body).toEqual({ error: "Text property is required" });
  });

  test("should return an error if text is empty api/todos", async () => {
    const { body } = await request(testServer.app)
      .post("/api/todos")
      .send({ text: "" })
      .expect(400);

    expect(body).toEqual({ error: "Text property is required" });
  });

  test("should return an updated todo api/todos:id", async () => {
    const todo = await prisma.todo.create({ data: todo1 });

    const { body } = await request(testServer.app)
      .put(`/api/todos/${todo.id}`)
      .send({ text: "hola punto update", completedAt: "2023-10-21" })
      .expect(200);

    expect(body).toEqual({
      id: expect.any(Number),
      text: "hola punto update",
      completedAt: "2023-10-21T00:00:00.000Z",
    });
  });

  // todo: realizar la operación con errores personalizados
  test("shoul return 404 if TODO not found", async () => {
    const todoId = 9999;
    const { body } = await request(testServer.app)
      .put(`/api/todos/${todoId}`)
      .send({ text: "NO! update" })
      .expect(404);

    expect(body).toEqual({ error: `Todo with id ${todoId} not found` });
  });

  test("shoul return an update TODO only the date ", async () => {
    const todo = await prisma.todo.create({ data: todo1 });

    //! HEYY, completedAt: no se puede enviar solo!!!
    const { body } = await request(testServer.app)
      .put(`/api/todos/${todo.id}`)
      .send({ text: todo1.text, completedAt: "2023-10-21" })
      .expect(200);

    expect(body).toEqual({
      id: expect.any(Number),
      text: todo1.text,
      completedAt: "2023-10-21T00:00:00.000Z",
    });
  });

  test("should delete a TODO api/todos/:id", async () => {
    const todo = await prisma.todo.create({ data: todo1 });

    const { body } = await request(testServer.app)
      .delete(`/api/todos/${todo.id}`)
      .expect(200);

    expect(body).toEqual({
      id: expect.any(Number),
      text: todo1.text,
      completedAt: null,
    });
  });

  test("should return 404 if a TODO do not exist api/todos/:id", async () => {
    const { body } = await request(testServer.app)
      .delete(`/api/todos/99999`)
      .expect(404);

    // console.log({ body });
    expect(body).toEqual({ error: "Todo with id 99999 not found" });
  });
});
