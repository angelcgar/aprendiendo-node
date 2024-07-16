import { buildMakePerson } from "./../../src/js-foundation/05-factory";

describe("js-fn/05", () => {
  const getUUID = () => "1234";
  const getAge = () => 35;

  test("buldMakePerson should return a function", () => {
    const buildMake = buildMakePerson({ getUUID, getAge });

    expect(typeof buildMake).toBe("function");
  });

  test('buldMake should return a person',() => {

    const buildMake = buildMakePerson({ getUUID, getAge });
    const johnDoe = buildMake({name: 'John Doe', birthdate: '1985-10-21'})

    expect(johnDoe).toEqual({
      id: '1234',
      name: 'John Doe',
      birthdate: '1985-10-21',
      age: 35
    })
  })
});
