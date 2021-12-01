import { inject, injectable } from "tsyringe";

import {UsersRepository} from "../../repositories/UsersRepository";
import {IUsersRepository} from "../../repositories/IUsersRepository";

import ICreateUserDTO from "../createUser/ICreateUserDTO";
import IHashProvider from "../../providers/HashProvider/models/IHashProvider";

import AppError from '../../../../Errors/AppError';

@injectable()
export class FindUserUseCase {
  constructor(
    @inject("UsersRepository")
    private UserRepository: IUsersRepository,
  ) {}

  public async execute(
    user_cpf:
   string) {


    const User = await this.UserRepository.findUserByCpf(user_cpf)

    if(!User) {
        return new AppError ('User Not Found')
    }
    return User;
  }
}

export default FindUserUseCase