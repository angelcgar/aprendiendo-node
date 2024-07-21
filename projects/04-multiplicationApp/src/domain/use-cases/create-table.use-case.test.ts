import { CreateTable } from "./create-table.use-case";

describe("CreateTableUseCase", () => {
  const createTable = new CreateTable();

  test("should create table with default values", () => {
    const table = createTable.execute({ base: 10 });
    const rows = table.split("\n").length;
    // console.log(table);

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain("10 * 1 = 10");
    expect(table).toContain("10 * 10 = 100");

    expect(rows).toBe(10);
  });

  test("should create toble with custom values", () => {
    const options = {
      base: 3,
      limit: 20,
    };

    const table = createTable.execute(options);
    const rows = table.split("\n").length;
    expect(table).toContain("3 * 1 = 3");
    expect(table).toContain("3 * 9 = 27");
    expect(table).toContain("3 * 17 = 51");
    expect(table).toContain("3 * 20 = 60");

    expect(rows).toBe(options.limit);
  });
});
