import { inject, injectable } from "tsyringe";

import {UsersRepository} from "../../repositories/UsersRepository";
import {IUsersRepository} from "../../repositories/IUsersRepository";

import ICreateUserDTO from "./ICreateUserDTO";
import IHashProvider from "../../providers/HashProvider/models/IHashProvider";

import AppError from '../../../../Errors/AppError';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private UserRepository: IUsersRepository,
    
    @inject('HashProvider')
    private hashProvider:IHashProvider,
  ) {}

  public async execute({
    user_name,
    user_surname,
    user_phone,
    user_cpf,
    user_password
  }: ICreateUserDTO) {


    const checkUserExists = await this.UserRepository.findUserByCpf(user_cpf)

    if(checkUserExists) {
        return new AppError ('CPF alredy used')
    }

     const hashedPassword = await this.hashProvider?.generateHash(user_password)

    const User= await this.UserRepository.create({
      user_name,
      user_surname,
      user_cpf,
      user_phone,
      user_password:hashedPassword
      
    });

    return User;
  }
}

export default CreateUserUseCase