// import { yarg } from './yargs.plugin';

const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];

  const { yarg } = await import("./yargs.plugin");

  return yarg;
};

describe("Test args.plugin.ts", () => {
  const originalArgv = process.argv;

  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });

  // * Cuando haces modificaciones a una variable global su valor sera constante para los siguientes test
  // usa beforeEach y afterEach para hacer limpiesa de tus modulos

  test("should return default values", async () => {
    const argv = await runCommand(["-b", "5"]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: "table",
        d: "outputs",
      })
    );
  });

  test("should return configuration with custom values", async () => {
    const customValues = [
      "-b",
      "1",
      "-l",
      "2",
      "-s",
      "-n",
      "custom-name",
      "-d",
      "custom-directory",
    ];
    const argv = await runCommand(customValues);
    // console.log(argv);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 1,
        l: 2,
        s: true,
        n: "custom-name",
        d: "custom-directory",
      })
    );
  });
});
