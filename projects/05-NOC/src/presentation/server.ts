import { EmailService } from "./email/email.service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/con-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
);

const emailService = new EmailService();

export class ServerApp {
  public static start() {
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

    // CronService.createJob("*/5 * * * * *", () => {
    //   const URL = "https://www.google.com";

    //   new CheckService(
    //     fileSystemLogRepository,
    //     () => console.log(URL + " is ok"),
    //     (error) => console.log(error)
    //   ).execute(URL);
    //   // new CheckService().execute("http://localhost:3000/");
    // });
  }
}
