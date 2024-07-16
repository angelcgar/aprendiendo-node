import { http } from "./../../src/plugins/http-client.plugin";

describe("plug/http", () => {
  test("http() should return a string", async () => {
    const data = await http.get("https://jsonplaceholder.typicode.com/todos/1");

    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    });
  });

  test("httpClient should have POST, PUT and Delete methods", () => {
    // expect(http.post()).toBe(Error("Not implementes"));
    expect(typeof http.post).toBe("function");
    expect(typeof http.put).toBe("function");
    expect(typeof http.delete).toBe("function");
    expect(typeof http.put).toBe("function");
  });
});
