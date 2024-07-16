import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("js-fn/03-calbacks", () => {
  test("getUserById should return an error if user does not exist", (done) => {
    const id = 10;
    getUserById(id, (err, user) => {
      expect(err).toBe(`user not found with id: ${id}`);
      expect(user).toBeUndefined();

      done();
    });
  });

  test("getUserById should return an user if id exist", (done) => {
    const id = 1;
    getUserById(id, (err, user) => {
      const id = 1;

      expect(err).toBeUndefined();
      expect(user).toBeDefined();

      expect(user).toStrictEqual({ id, name: "Juan Hernandez" });

      done();
    });
  });
});
