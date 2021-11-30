import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("Statements")
export default class Statements {
  @ObjectIdColumn()
  id: ObjectID;

  @Column('string')
  user_name: string;

  @Column('string')
  user_email: string;

  @Column('string')
  user_cpf: string;

  @Column("jsonb", { nullable: true })
  cart?: Object[];

  @CreateDateColumn('date')
  created_at?: Date;
}
