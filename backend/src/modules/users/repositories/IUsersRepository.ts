import ICreateUserRepositoryDTO from "../useCases/createUser/ICreateUserDTO";
import User from "../typeorm/schemas/Users";
import { Request, Response } from 'express';

export interface IUsersRepository {
  create(data: ICreateUserRepositoryDTO): Promise<User|undefined>;
  findUserByCpf(user_cpf:string):Promise<User|undefined>;
  findAllUsers(except_user_id?:string):Promise<User[]|undefined>;
  deleteUserByCpf(user_cpf:string):Promise<User|undefined>;

}
