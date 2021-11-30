import { inject, injectable } from "tsyringe";

import {UsersRepository} from "../../repositories/UsersRepository";
import {IUsersRepository} from "../../repositories/IUsersRepository";

import ICreateUserDTO from "./ICreateUserDTO";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private UserRepository: IUsersRepository
  ) {}

  async execute({
    user_name,
    user_email,
    user_cpf,
    cart,
    created_at,
  }: ICreateUserDTO) {
    const UserOperation = await this.UserRepository.create({
      user_name,
      user_email,
      user_cpf,
      cart,
      created_at,
    });

    return UserOperation;
  }
}
