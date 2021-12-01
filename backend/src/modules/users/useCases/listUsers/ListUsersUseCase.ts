import { inject, injectable } from "tsyringe";

import {IUsersRepository} from "../../repositories/IUsersRepository";


@injectable()
export class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private UserRepository: IUsersRepository,
  ) {}

  public async execute() {
    const users = await this.UserRepository.findAllUsers()

    return users;
  }
}

export default ListUsersUseCase