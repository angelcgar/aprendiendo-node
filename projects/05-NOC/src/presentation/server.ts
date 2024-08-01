import { EmailService } from "./email/email.service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { LogSeverityLevel } from "../domain/entities/log.entity";
import { PostgreLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";

const fsLogRepository = new LogRepositoryImpl(new FileSystemDatasource());
const mongoLogRepository = new LogRepositoryImpl(new MongoLogDatasource());
const postgresLogRepository = new LogRepositoryImpl(new PostgreLogDatasource());

const emailService = new EmailService();

export class ServerApp {
  public static async start() {
    console.log("Server started...");

    // todo: Mandar mail
    // new SendEmailLogs(emailService, fileSystemLogRepository).execute([
    //   "ac5802021@gmail.com",
    //   "aureliogar25@gmail.com",
    // ]);

    // emailService.sendEmailWithFileSystemLogs([
    //   "ac5802021@gmail.com",
    //   "aureliogar25@gmail.com",
    // ]);

    // const logs = await LogRepository.saveLog({
    //   level: LogSeverityLevel.low,
    //   message: "Hola pestgresql",
    //   origin: "server.ts",
    //   createdAt: new Date(),
    // });
    // console.log(logs);

    // CronService.createJob("*/5 * * * * *", () => {
    //   const URL = "https://www.google.com";

    //   new CheckServiceMultiple(
    //     [fsLogRepository, postgresLogRepository],
    //     () => console.log(URL + " is ok"),
    //     (error) => console.log(error)
    //   ).execute(URL);
    // });
  }
}
