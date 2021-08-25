import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTodoController1629918201555 implements MigrationInterface {
    name = 'AddTodoController1629918201555'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todo" ("updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "created_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "id" SERIAL NOT NULL, "content" character varying NOT NULL, "isCompleted" boolean, "isVisible" boolean, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
    
        // Functions
        await queryRunner.query(
            `CREATE FUNCTION trigger_update_timestamp() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = NOW(); RETURN NEW; END; $$ LANGUAGE plpgsql;`,
            undefined,
        );

         //Triggers
        await queryRunner.query(
        `CREATE TRIGGER update_timestamp_todo BEFORE UPDATE ON todo FOR EACH ROW EXECUTE PROCEDURE trigger_update_timestamp();`,
        undefined,
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TRIGGER update_timestamp_todo ON "feature_agent_group_assignment"`, undefined);
        await queryRunner.query(`DROP FUNCTION trigger_update_timestamp()`, undefined);
        await queryRunner.query(`DROP TABLE "todo"`);
    }
}
