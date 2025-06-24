import "reflect-metadata";
import { DataSource } from "typeorm";
import { Task } from "./entity/Task";

const isTest = process.env.NODE_ENV === "dev";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: isTest ? ":memory:" : "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Task],
  migrations: ["src/migrations/*.ts"],
  migrationsTableName: "custom_migration_table",
});
