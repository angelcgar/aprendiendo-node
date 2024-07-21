import { ServerApp } from "./presentation/server-app";
// process.argv = ["node", "app.ts", "-b", "10"];
// import "./app";

describe("Test App.js", () => {
  test("should be truthy", async () => {
    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;
    process.argv = [
      "node",
      "app.ts",
      "-b",
      "10",
      "-l",
      "5",
      "-s",
      "-n",
      "test-file",
      "-d",
      "test-directory",
    ];

    await import("./app");

    expect(serverRunMock).toHaveBeenCalledWith({
      base: 10,
      limit: 5,
      showTable: true,
      fileName: "test-file",
      fileDestination: "test-directory",
    });
  });
});
