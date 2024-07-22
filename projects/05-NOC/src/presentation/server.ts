import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/con-service";

export class ServerApp {
  public static start() {
    console.log("Server started...");

    CronService.createJob("*/5 * * * * *", () => {
      const URL = "https://www.google.com";

      new CheckService(
        () => console.log(URL + " is ok"),
        (error) => console.log(error)
      ).execute(URL);
      // new CheckService().execute("http://localhost:3000/");
    });
  }
}
