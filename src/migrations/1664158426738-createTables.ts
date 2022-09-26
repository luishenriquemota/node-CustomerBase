import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1664158426738 implements MigrationInterface {
    name = 'createTables1664158426738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contact" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying, "telephone" character varying, "clientId" uuid, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "telephone" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "contact"`);
    }

}
