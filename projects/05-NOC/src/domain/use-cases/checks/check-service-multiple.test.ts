import { LogEntity } from "../../entities/log.entity";
import { CheckServiceMultiple } from "./check-service-multiple";

describe("CheckService UseCase", () => {
  const mockRepo1 = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
  };

  const mockRepo2 = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
  };

  const mockRepo3 = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
  };

  const successCallBack = jest.fn();
  const errorCallback = jest.fn();

  const checkService = new CheckServiceMultiple(
    [mockRepo1, mockRepo2, mockRepo3],
    successCallBack,
    errorCallback
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should call successCallBack", async () => {
    const wasOk = await checkService.execute("https://www.google.com");

    expect(wasOk).toBeTruthy();
    expect(successCallBack).toHaveBeenCalled();
    expect(errorCallback).not.toHaveBeenCalled();

    expect(mockRepo1.saveLog).toBeCalledWith(expect.any(LogEntity));
    expect(mockRepo2.saveLog).toBeCalledWith(expect.any(LogEntity));
    expect(mockRepo3.saveLog).toBeCalledWith(expect.any(LogEntity));
  });

  test("should call errorCallBack when fetch return false", async () => {
    const wasOk = await checkService.execute("https://www.ascgoogle.com");

    expect(wasOk).toBeFalsy();
    expect(successCallBack).not.toHaveBeenCalled();
    expect(errorCallback).toHaveBeenCalled();

    expect(mockRepo1.saveLog).toBeCalledWith(expect.any(LogEntity));
    expect(mockRepo2.saveLog).toBeCalledWith(expect.any(LogEntity));
    expect(mockRepo3.saveLog).toBeCalledWith(expect.any(LogEntity));
  });
});
