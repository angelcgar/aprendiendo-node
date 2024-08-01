import { LogEntity } from "../../entities/log.entity";
import { CheckService } from "./check-service";

describe("CheckService UseCase", () => {
  const mockRepository = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
  };

  const successCallBack = jest.fn();
  const errorCallback = jest.fn();

  const checkService = new CheckService(
    mockRepository,
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

    expect(mockRepository.saveLog).toBeCalledWith(expect.any(LogEntity));
  });

  test("should call errorCallBack when fetch return false", async () => {
    const wasOk = await checkService.execute("https://www.ascgoogle.com");

    expect(wasOk).toBeFalsy();
    expect(successCallBack).not.toHaveBeenCalled();
    expect(errorCallback).toHaveBeenCalled();

    expect(mockRepository.saveLog).toBeCalledWith(expect.any(LogEntity));
  });
});
