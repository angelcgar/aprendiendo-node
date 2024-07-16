describe("App", () => {
  test("should be 35", () => {
    // 1. Arrange o ordenar
    const num1 = 10;
    const num2 = 20;

    // 2. Act o aplicar estimulos

    const result = num1 + num2;

    // 3. Assert o lo que estamos esperando

    expect(result).toBe(30);
  });
});
