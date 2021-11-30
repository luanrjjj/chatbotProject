import { inject, injectable } from "tsyringe";

import {UsersRepository} from "../../repositories/UsersRepository";
import {IUsersRepository} from "../../repositories/IUsersRepository";

import ICreateUserDTO from "./ICreateUserDTO";
import IHashProvider from "@modules/users/providers/HashProvider/models/IHashProvider";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private UserRepository: IUsersRepository,
    
    @inject('HashProvider')
    private hashProvider:IHashProvider,
  ) {}

  async execute({
    user_name,
    user_surname,
    user_phone,
    user_cpf,
    user_password
  }: ICreateUserDTO) {
    const UserOperation = await this.UserRepository.create({
      user_name,
      user_surname,
      user_cpf,
      user_phone,
      user_password
      
    });

    return UserOperation;
  }
}

export default CreateUserUseCase