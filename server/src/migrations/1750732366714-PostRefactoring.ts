import { MigrationInterface, QueryRunner } from "typeorm";

export class PostRefactoring1750732366714 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
