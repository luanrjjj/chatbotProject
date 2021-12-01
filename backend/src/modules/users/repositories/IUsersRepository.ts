import ICreateUserRepositoryDTO from "../useCases/createUser/ICreateUserDTO";
import User from "../typeorm/schemas/Users";

export interface IUsersRepository {
  create(data: ICreateUserRepositoryDTO): Promise<User>;
  findUserByCpf(user_cpf:string):Promise<User|undefined>;
  findAllUsers(except_user_id:string):Promise<User[]|undefined>;

}
