import { createConnection, Entity, PrimaryGeneratedColumn, Column, getRepository } from "typeorm";
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

// const repository = getRepository(User);

// const user = new User();
// user.name = "Troy";
// user.email = "troy@sololearn.com";
// user.age = 25;

// await repository.save(user);

// const results = await repository.findOne({where: {name: "Troy"}});

// const myUser = await repository.findOne({where: {name: "Troy"}});
// myUser.email = "t@sololearn.com";
// await repository.save(myUser);

// const myUser = await repository.findOne({where: {name: "Troy"}});
// await repository.delete(myUser.id);

