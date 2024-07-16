import { characters } from "./../../src/js-foundation/02-desestructurin";

describe("fn/02", () => {
  test("characters should containt flash, superman", () => {
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });

  test("first character should be flash and secod Superman", () => {
    const [flas, superman, ...res] = characters;

    expect(flas).toBe("Flash");
    expect(superman).toBe("Superman");
  });
});
