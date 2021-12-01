import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("Users")
export default class Users {
  @ObjectIdColumn()
  id: ObjectID;

  @Column('string')
  user_name: string;

  @Column('string')
  user_surname: string;

  @Column('string')
  user_cpf: string;

  @Column('string')
  user_phone: string;

  @Column('string')
  user_password: string;
}
