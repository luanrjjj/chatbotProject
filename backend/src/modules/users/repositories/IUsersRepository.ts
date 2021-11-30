import ICreateUserRepositoryDTO from "../useCases/createUser/ICreateUserDTO";
import User from "../typeorm/schemas/Users";

export interface IUsersRepository {
  create(data: ICreateUserRepositoryDTO): Promise<User>;
}