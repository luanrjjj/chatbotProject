import { getMongoRepository, getRepository, MongoRepository, Repository } from "typeorm";

import Users from "../typeorm/schemas/Users";

import ICreateUserRepositoryDTO from "../useCases/createUser/ICreateUserDTO";

import {IUsersRepository} from "./IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private ormRepository: MongoRepository<Users>;

  constructor() {
    this.ormRepository = getMongoRepository(Users,'mongo');
  }

  public async create({
    user_name,
    user_phone,
    user_cpf,
    user_surname,
  }: ICreateUserRepositoryDTO): Promise<Users> {
    
    const User = this.ormRepository?.create({
      user_name,
      user_phone,
      user_cpf,
      user_surname,
    });

    await this.ormRepository.save(User);
    return User;
  }
}
