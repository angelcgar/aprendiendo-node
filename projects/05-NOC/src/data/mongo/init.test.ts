import mongoose from "mongoose";
import { MongoDataBase } from "./init";

describe("init MonfoDB", () => {
  afterAll(() => {
    mongoose.connection.close();
  });

  test("should connect to MongoDb", async () => {
    const connected = await MongoDataBase.connect({
      dbName: process.env.MONGO_DB_NAME!,
      mongoUrl: process.env.MONGO_URL!,
    });

    expect(connected).toBeTruthy();
  });

  test("should throw an error", async () => {
    try {
      const connected = await MongoDataBase.connect({
        dbName: process.env.MONGO_DB_NAME!,
        mongoUrl: "mongodb://angel:123456789@localhostt:27017",
      });

      expect(connected).toBeFalsy();
    } catch (error) {}
  });
});
