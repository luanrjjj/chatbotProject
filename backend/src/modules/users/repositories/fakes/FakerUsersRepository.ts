import {IUsersRepository} from '../IUsersRepository';
import User from '../../typeorm/schemas/Users'
import {v4} from 'uuid'
import ICreateUserDTO from '@modules/users/useCases/createUser/ICreateUserDTO';

class FakeUsersRepository implements IUsersRepository {

    private users:User[] = []

    public async create(userData:ICreateUserDTO):Promise<User> {
        const user = new User()

        Object.assign(user, {id:v4()},userData);

        this.users.push(user)

        return user
    }

    public async findUserByCpf(user_cpf:string):Promise<User|undefined> {
         const user = this.users.find(user=> user.user_cpf===user_cpf)
        return user
    }

    public async findAllUsers(except_user_id:string):Promise<User[]|undefined> {
        
        return this.users

    }
    
}

export default FakeUsersRepository