import {IUsersRepository} from '../IUsersRepository';
import User from '../../typeorm/schemas/Users'
import {v4} from 'uuid'
import ICreateUserDTO from "../../useCases/createUser/ICreateUserDTO";
import { Response,response } from "express";


class FakeUsersRepository implements IUsersRepository {

    private users:User[] = []

        public async findUserByCpf(user_cpf:string):Promise<User|undefined> {
         const user = this.users.find(user=> user.user_cpf===user_cpf)
        return user
    }

    public async create(userData:ICreateUserDTO):Promise<User|undefined> {
        const user = new User()

        Object.assign(user, {id:v4()},userData);

        this.users.push(user)

        return user
    }



    public async findAllUsers(except_user_id:string):Promise<User[]|undefined> {
        
        return this.users

    }

    public async deleteUserByCpf(user_cpf:string):Promise<User|undefined> {

        const user = await this.users.find(user=> {user.user_cpf===user_cpf})

        if (user) {
            this.users = this.users.filter(function(value,index,arr){
                return value.user_cpf!=user.user_cpf
            })   
        }
        const userDeleted = await this.users.find(user=> {user.user_cpf===user_cpf})
        
        
        return userDeleted
        
    }
    
}

export default FakeUsersRepository