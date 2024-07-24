import fs from 'node:fs';

import { LogDatasource } from '../../domain/datasources/log.datasource';
import { LogEntity, LogServerityLevel } from '../../domain/entities/log.entity';

export class FileSystemDatasource implements LogDatasource {
  private readonly logPath: string = "logs/";
  private readonly allLogsPath: string = "logs/logs-all.log";
  private readonly mediumLogsPath: string = "logs/medium-low.log";
  private readonly highLogsPath: string = "logs/high-low.log";

  constructor() {
    this.createLogsFile();
  }

  private createLogsFile = () => {
    if (!fs.existsSync(this.logPath)) {
      fs.mkdirSync(this.logPath);
    }

    [this.allLogsPath, this.mediumLogsPath, this.highLogsPath].forEach(
      (path) => {
        if (fs.existsSync(path)) return;

        fs.writeFileSync(path, "");
      }
    );
  };

  public async saveLog(newLog: LogEntity): Promise<void> {
    const logAsJson = `${JSON.stringify(newLog)}\n`;

    fs.appendFileSync(this.allLogsPath, logAsJson);

    if (newLog.level === LogServerityLevel.low) return;

    if (newLog.level === LogServerityLevel.medium) {
      fs.appendFileSync(this.mediumLogsPath, logAsJson);
    } else {
      fs.appendFileSync(this.highLogsPath, logAsJson);
    }
  }

  private getLogsFromFile = (path: string): LogEntity[] => {
    const content = fs.readFileSync(path, "utf-8");
    const logs = content.split("\n").map(LogEntity.fromJson);
    // const logs = content.split("\n").map((log) => LogEntity.fromJson(log));

    return logs;
  };

  public async getLogs(serverityLevel: LogServerityLevel): Promise<LogEntity[]> {
    switch (serverityLevel) {
      case LogServerityLevel.low:
        return this.getLogsFromFile(this.allLogsPath);

      case LogServerityLevel.medium:
        return this.getLogsFromFile(this.mediumLogsPath);

      case LogServerityLevel.high:
        return this.getLogsFromFile(this.highLogsPath);

      default:
        throw new Error(`${serverityLevel} not implemented`);
    }
  }
}
