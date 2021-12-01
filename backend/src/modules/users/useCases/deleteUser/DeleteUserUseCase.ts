import { inject, injectable } from "tsyringe";

import {IUsersRepository} from "../../repositories/IUsersRepository";

import AppError from '../../../../Errors/AppError';

@injectable()
export class DeleteUserUseCase {
  constructor(
    @inject("UsersRepository")
    private UserRepository: IUsersRepository,
  ) {}

  public async execute(
    user_cpf:
   string) {


     await this.UserRepository.deleteUserByCpf(user_cpf)


    const user = await this.UserRepository.findUserByCpf(user_cpf)

    console.log(user)

    if(user) {
        return new AppError ('User Not Deleted')
    }

  
    return ;
  }
}

export default DeleteUserUseCase