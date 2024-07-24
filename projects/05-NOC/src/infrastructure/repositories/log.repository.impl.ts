import { LogDatasource } from '../../domain/datasources/log.datasource';
import { LogEntity, LogServerityLevel } from '../../domain/entities/log.entity';
import { LogRepository } from '../../domain/repository/log.repository';

export class LogRepositoryImpl implements LogRepository {
  constructor(private readonly logDatasource: LogDatasource) {}

  public async saveLog(log: LogEntity): Promise<void> {
    return this.logDatasource.saveLog(log);
  }

  public async getLogs(
    serverityLevel: LogServerityLevel
  ): Promise<LogEntity[]> {
    return this.logDatasource.getLogs(serverityLevel);
  }
}
