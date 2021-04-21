import { createConnection, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import "reflect-metadata";

const connection = await createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your-db-username",
  password: "your-password",
  database: "your-db",
  entities: ["entity/*.js"]
});

@Entity()

export class User {

  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    name!: string;

  @Column()
    email!: string;

  @Column()
    age!: number;   

}

