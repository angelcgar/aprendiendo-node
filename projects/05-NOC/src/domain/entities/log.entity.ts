export enum LogSeverityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export interface LogEntityOptions {
  createdAt?: Date;
  level: LogSeverityLevel;
  message: string;
  origin: string;
}

export class LogEntity {
  public level: LogSeverityLevel;
  public message: string;
  public createdAt: Date;
  public origin: string;

  constructor(options: LogEntityOptions) {
    const { level, message, origin, createdAt = new Date() } = options;

    this.message = message;
    this.level = level;
    this.origin = origin;
    this.createdAt = createdAt;
  }

  static fromJson = (json: string): LogEntity => {
    json = json === "" ? "{}" : json;

    const { message, level, createdAt, origin } = JSON.parse(json);

    // if (!message) throw new Error('Message is required')

    const log = new LogEntity({
      message,
      level,
      createdAt: new Date(createdAt),
      origin,
    });

    return log;
  };

  static fromObject = (object: { [key: string]: any }): LogEntity => {
    const { message, level, createdAt, origin } = object;
    if (!message) throw new Error("message is required");

    const log = new LogEntity({
      message,
      level,
      createdAt,
      origin,
    });

    return log;
  };
}
