import { getUUID } from "./../../src/plugins/get-id.plugin";

describe("plug/get-id", () => {
  test("getUUID() should return a uuid", () => {
    const uuid = getUUID();

    expect(typeof uuid).toBe("string");
    expect(uuid.length).toBe(36);
  });
});
