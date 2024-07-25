import nodemailer from "nodemailer";
import { envs } from "../../config/plugins/envs.plugin";
import { LogEntity, LogServerityLevel } from "../../domain/entities/log.entity";

interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
}

interface Attachment {
  filename: string;
  path: string;
}

export class EmailService {
  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  constructor() {}

  async sendEmail(options: SendMailOptions): Promise<boolean> {
    const { to, subject, htmlBody, attachments = [] } = options;

    try {
      const sendInformation = await this.transporter.sendMail({
        to,
        subject,
        html: htmlBody,
        attachments,
      });

      // console.log(sendInformation);
      // const log = new LogEntity({
      //   level: LogServerityLevel.low,
      //   message: "Email sent",
      //   origin: "email.service.ts",
      // });

      return true;
    } catch (error) {
      // const log = new LogEntity({
      //   level: LogServerityLevel.high,
      //   message: "Email not sent",
      //   origin: "email.service.ts",
      // });

      return false;
    }
  }

  public async sendEmailWithFileSystemLogs(
    to: string | string[]
  ): Promise<boolean> {
    const subject = "Logs del servidor";
    const htmlBody = `
    <h3>Logs enviando un email con un archivo</h3>
    <p>Lorem ipsum dolor itasdc ldc</p>
    <p>Ver archivo</p>
    `;

    const attachments: Attachment[] = [
      { filename: "logs-all.log", path: "./logs/logs-all.log" },
      { filename: "logs-high.log", path: "./logs/medium-low.log" },
      { filename: "logs-medium.log", path: "./logs/high-low.log" },
    ];

    return await this.sendEmail({
      to,
      subject,
      attachments,
      htmlBody,
    });
  }
}
