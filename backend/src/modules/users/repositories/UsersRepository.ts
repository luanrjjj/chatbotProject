import { getMongoRepository, getRepository, MongoRepository, Repository,Not } from "typeorm";

import Users from "../typeorm/schemas/Users";

import ICreateUserRepositoryDTO from "../useCases/createUser/ICreateUserDTO";

import {IUsersRepository} from "./IUsersRepository";

import User from "../typeorm/schemas/Users";

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
    console.log('dsuadhasu',user_name)
    
    const User = this.ormRepository?.create({
      user_name,
      user_phone,
      user_cpf,
      user_surname,
    });
    console.log('repository',User)
    await this.ormRepository.save(User);
    return User;
  }
  
  public async findUserByCpf(user_cpf:string):Promise<User|undefined> {


    const user = await this.ormRepository.findOne(user_cpf)

    return user
  }

  public async findAllUsers(except_user_id:string):Promise<User[]|undefined> {

    let users:User[]
    if (except_user_id) {
        users=await this.ormRepository.find({
            where: {
                id:Not(except_user_id),
            }
    })
    
} else {
    users = await this.ormRepository.find();
}

return users


  }
}
