import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepositoryImpl } from "./log.repository.impl";

describe("logRepositoryImple Test", () => {
  const mockLogDatasource = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
  };

  const logRepository = new LogRepositoryImpl(mockLogDatasource);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("saveLog should call the datasource with", async () => {
    const log = {
      level: LogSeverityLevel.low,
      message: "test",
      origin: "log.repository.impl.test.ts",
    } as LogEntity;

    await logRepository.saveLog(log);

    expect(mockLogDatasource.saveLog).toHaveBeenCalledWith(log);
  });

  test("getlogs should call the datasource with", async () => {
    await logRepository.getLogs(LogSeverityLevel.low);
    expect(mockLogDatasource.getLogs).toHaveBeenCalledWith(
      LogSeverityLevel.low
    );
  });
});
