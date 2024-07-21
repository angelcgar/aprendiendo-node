import fs from "node:fs";
import { SaveFile } from "./save-file.use-case";

describe("SaveFileUseCase", () => {
  const saveFile = new SaveFile();

  const customOptions = {
    fileContent: "custom content",
    fileDestination: "custom-output",
    fileName: "custom-table-name",
  };

  // beforeAll(() => {
  //   jest.clearAllMocks();
  // });

  afterEach(() => {
    const outputFolderExists = fs.existsSync("outputs");
    if (outputFolderExists) fs.rmSync("outputs", { recursive: true });

    const customOutputFolderExists = fs.existsSync("custom-output");
    if (customOutputFolderExists) {
      fs.rmSync("custom-output", { recursive: true });
    }
  });

  test("should save file with default values", () => {
    const filePath = "outputs/table.txt";
    const options = {
      fileContent: "test content",
    };

    const result = saveFile.execute(options);

    expect(result).toBeTruthy();
    const fileExixts = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });

    expect(result).toBeTruthy();
    expect(fileExixts).toBeTruthy();
    expect(fileContent).toBe(options.fileContent);
  });

  test("should save file with custom values", () => {
    const filePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;
    const result = saveFile.execute(customOptions);
    const fileExist = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    expect(result).toBeTruthy();
    expect(fileExist).toBeTruthy();
    expect(fileContent).toBe(customOptions.fileContent);
  });

  test("should return false if directory could not be created", () => {
    const mkdirSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("error");
    });

    const result = saveFile.execute(customOptions);
    expect(result).toBeFalsy();

    mkdirSpy.mockRestore();
  });

  test("should return false if file could not be created", () => {
    const writeFileSpy = jest
      .spyOn(fs, "writeFileSync")
      .mockImplementation(() => {
        throw new Error("error");
      });

    const result = saveFile.execute({ fileContent: "holaß" });
    expect(result).toBeFalsy();

    writeFileSpy.mockRestore();
  });
});
