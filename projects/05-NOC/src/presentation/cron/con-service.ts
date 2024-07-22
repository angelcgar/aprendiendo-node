import { CronJob } from "cron";

type CronTime = string | Date;
type OnTlick = () => void;

export class CronService {
  public static createJob(cronTime: CronTime, onTick: OnTlick): CronJob {
    const job = CronJob.from({ cronTime, onTick });

    job.start();

    return job;
  }
}
