import { emailTemplate } from "../../src/js-foundation/01-template";

describe("js-fn/01-template", () => {
  test("emailTemplate should contain a greeting", () => {
    expect(emailTemplate).toContain("Hola");
  });

  test("emailTemplate should contain {{user}} and {{id}}", () => {
    expect(emailTemplate).toMatch(/{{user}}/);
    expect(emailTemplate).toMatch(/{{id}}/);
  });
});
