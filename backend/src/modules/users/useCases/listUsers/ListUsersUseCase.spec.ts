import FakeUsersRepository from '../../repositories/fakes/FakerUsersRepository';
import CreateUserUseCase from '../createUser/CreateUserUseCase';
import FakeHashProvider from '../../providers/HashProvider/fakes/FakeHashProvider';
import AppError from '../../../../Errors/AppError';
import ListUsersUseCase from './ListUsersUseCase';


let createUser:CreateUserUseCase;
let fakeHashProvider:FakeHashProvider;
let fakeUsersRepository:FakeUsersRepository;
let listUsers :ListUsersUseCase


describe('FindUser',()=> {
    beforeEach(()=> {
        fakeUsersRepository = new FakeUsersRepository()
        createUser = new CreateUserUseCase(fakeUsersRepository,fakeHashProvider)
        fakeHashProvider = new FakeHashProvider()
        listUsers = new ListUsersUseCase(fakeUsersRepository)
    })

    it('should be able to find all users',async ()=> {

        const userOne = await createUser.execute({
            user_name:'John',
            user_cpf:'88522633910',
            user_phone:'(11)968552211',
            user_surname:"Doe",
            user_password:'123456'
        })
    
        const userTwo = await createUser.execute({
            user_name:'John',
            user_cpf:'88522633510',
            user_phone:'(11)968552211',
            user_surname:"Doe",
            user_password:'123456'
        })    

        await listUsers.execute()

        
    })
    

    it ('should not be able to create a new user with same email from another',async() => {
       
})
})