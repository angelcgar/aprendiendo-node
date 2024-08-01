import { LogEntity, LogSeverityLevel } from "../entities/log.entity";
import { LogDatasource } from "./log.datasource";

describe("log.datasource.ts", () => {
  const newLog = new LogEntity({
    origin: "log.datasource.test.ts",
    message: "test-message",
    level: LogSeverityLevel.low,
  });

  class MockLogDatasource implements LogDatasource {
    async saveLog(log: LogEntity): Promise<void> {
      return;
    }

    async getLogs(serverityLevel: LogSeverityLevel): Promise<LogEntity[]> {
      return [newLog];
    }
  }

  test("should test the abstract class", async () => {
    const mockLogDatasource = new MockLogDatasource();

    expect(mockLogDatasource).toBeInstanceOf(MockLogDatasource);
    expect(typeof mockLogDatasource.saveLog).toBe("function");
    expect(typeof mockLogDatasource.getLogs).toBe("function");

    await mockLogDatasource.saveLog(newLog);
    const log = await mockLogDatasource.getLogs(LogSeverityLevel.low);

    expect(log).toHaveLength(1);
    expect(log[0]).toBeInstanceOf(LogEntity);
  });
});
