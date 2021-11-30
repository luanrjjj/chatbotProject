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

    
}

export default FakeUsersRepository