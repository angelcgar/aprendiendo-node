import { getAge } from "./../../src/plugins/get-age.plugin";

describe("plu/get-age", () => {
  test("getAge() should return the age of a person", () => {
    const birthdate = "1985-10-21";
    const age = getAge(birthdate);
    expect(age).toBe(39);
  });

  test("getAge should return current age", () => {
    const birthdate = "1985-10-21";
    const age = getAge(birthdate);

    const calculatorAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculatorAge);
  });

  test("getAge should return 0 years", () => {
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1985);

    const birthdate = "1995-10-21";
    const age = getAge(birthdate);

    expect(age).toBe(0);
  });
});
