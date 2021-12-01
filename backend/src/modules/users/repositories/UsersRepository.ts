import { getMongoRepository, getRepository, MongoRepository, Repository,Not, } from "typeorm";

import Users from "../typeorm/schemas/Users";


import ICreateUserRepositoryDTO from "../useCases/createUser/ICreateUserDTO";

import {IUsersRepository} from "./IUsersRepository";

import User from "../typeorm/schemas/Users";
import { Response,response } from "express";



export class UsersRepository implements IUsersRepository {
  private ormRepository: MongoRepository<Users>;

  constructor() {
    this.ormRepository = getMongoRepository(Users,'mongo');
  }

  public async findUserByCpf(user_cpf:string):Promise<User|undefined> {

   
      console.log('here',user_cpf)
      const user = await this.ormRepository.findOne({
      where: {
        user_cpf:user_cpf
      }
      })
      console.log('here1',user)
  
      return user
   
   
  }


  public async create({
    user_name,
    user_phone,
    user_cpf,
    user_surname,
    user_password
  }: ICreateUserRepositoryDTO): Promise<User|undefined> {

    const user = this.ormRepository.create({
    user_name,
    user_phone,
    user_cpf,
    user_surname,
    user_password
    })
  
      
      await this.ormRepository.save(user);
      
      return user;
 
  }
  
  public async deleteUserByCpf(user_cpf:string):Promise<User|undefined> {

    const user = await this.ormRepository.findOne({
    where: {
      user_cpf:user_cpf
    }
    })
    if (user) {
   await this.ormRepository.delete(user?.id)
    }

    return 
}
  public async findAllUsers(except_user_id:string):Promise<User[]|undefined> {

    let users:User[]
    users = await this.ormRepository.find()

    return users

    /*
    if (except_user_id) {
        users=await this.ormRepository.find({
            where: {
                id:Not(except_user_id),
            }
    })
    
} else {
    users = await this.ormRepository.find();
}*/



  }
}
