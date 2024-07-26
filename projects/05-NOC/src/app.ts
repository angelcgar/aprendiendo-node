import { PrismaClient } from "@prisma/client";
import { envs } from "./config/plugins/envs.plugin";
import { LogModel, MongoDataBase } from "./data/mongo";
import { ServerApp } from "./presentation/server";

(async () => {
  await main();
})();

async function main() {
  // await MongoDataBase.connect({
  //   mongoUrl: envs.MONGO_URL,
  //   dbName: envs.MONGO_DB_NAME,
  // });

  const prisma = new PrismaClient();
  // const newLog = await prisma.logModel.create({
  //   data: {
  //     level: "HIGH",
  //     message: "Test message",
  //     origin: "app.ts",
  //   },
  // });

  // console.log({ newLog });
  // const logs = await prisma.logModel.findMany({
  //   where: {
  //     level: "MEDIUM",
  //   },
  // });
  // console.log(logs);

  //* Crear un registro o coleccion, documento = registro
  // const newLog = await LogModel.create({
  //   message: "Test message desde Mongo",
  //   origin: "App.ts",
  //   level: "low",
  // });

  // await newLog.save();

  // console.log(newLog);

  // const logs = await LogModel.find();
  // console.log(logs[0].message);

  ServerApp.start();
}
