export enum LogServerityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export interface LogEntityOptions {
  level: LogServerityLevel;
  message: string;
  createdAt?: Date;
  origin: string;
}

export class LogEntity {
  public level: LogServerityLevel;
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
    const { message, level, createdAt, origin } = JSON.parse(json);

    // if (!message) throw new Error('Message is required')

    const log = new LogEntity({
      message,
      level,
      createdAt,
      origin,
    });

    return log;
  };
}
