import { PrismaClient, SeverityLevel } from "@prisma/client";

import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

const prismaClient = new PrismaClient();

const severityEnum = {
  low: SeverityLevel.LOW,
  medium: SeverityLevel.MEDIUM,
  high: SeverityLevel.HIGH,
};

export class PostgreLogDatasource implements LogDatasource {
  public async saveLog(log: LogEntity): Promise<void> {
    const level = severityEnum[log.level];

    const newLog = await prismaClient.logModel.create({
      data: {
        ...log,
        level: level,
      },
    });
  }

  public async getLogs(serverityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    const level = severityEnum[serverityLevel];

    const dbLogs = await prismaClient.logModel.findMany({
      where: { level },
    });

    return dbLogs.map(LogEntity.fromObject);
  }
}
