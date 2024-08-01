import { LogEntity, LogSeverityLevel } from "./log.entity";

describe("log.entity.ts", () => {
  const dataObj = {
    message: "Hola mundo",
    level: LogSeverityLevel.high,
    origin: "log.entity.test.ts",
  };

  test("should create a LogEntity instance", () => {
    const log = new LogEntity(dataObj);

    expect(log).toBeInstanceOf(LogEntity);
    expect(log.message).toBe(dataObj.message);
    expect(log.level).toBe(dataObj.level);
    expect(log.origin).toBe(dataObj.origin);
    expect(log.createdAt).toBeInstanceOf(Date);
  });

  test("should create a LogEntity instance fromJson", () => {
    const json = `{"message":"Service https://www.google.com working","level":"low","origin":"check-service.ts","createdAt":"2024-07-27T17:01:30.541Z"}`;

    const log = LogEntity.fromJson(json);

    expect(log).toBeInstanceOf(LogEntity);
    expect(log.message).toBe("Service https://www.google.com working");
    expect(log.level).toBe("low");
    expect(log.origin).toBe("check-service.ts");
    expect(log.createdAt).toBeInstanceOf(Date);
  });

  test("should create a LogEntity instace fromOnject", () => {
    const log = LogEntity.fromObject(dataObj);

    expect(log).toBeInstanceOf(LogEntity);
    expect(log.message).toBe(dataObj.message);
    expect(log.level).toBe(dataObj.level);
    expect(log.origin).toBe(dataObj.origin);
    expect(log.createdAt).toBeInstanceOf(Date);
  });
});
