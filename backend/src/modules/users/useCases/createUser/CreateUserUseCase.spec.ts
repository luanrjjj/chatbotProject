import FakeUsersRepository from '../../repositories/fakes/FakerUsersRepository';
import CreateUserUseCase from './CreateUserUseCase';
import FakeHashProvider from '../../providers/HashProvider/fakes/FakeHashProvider';
import AppError from '../../../../Errors/AppError';


let createUser:CreateUserUseCase;
let fakeHashProvider:FakeHashProvider;
let fakeUsersRepository:FakeUsersRepository;

describe('CreateUser',()=> {
    beforeEach(()=> {
        fakeUsersRepository = new FakeUsersRepository()
        createUser = new CreateUserUseCase(fakeUsersRepository,fakeHashProvider)
        fakeHashProvider = new FakeHashProvider()
    })


    it('should be able to create a new user',async ()=> {
        const user = await createUser.execute({
            user_name:'John',
            user_cpf:'88522633910',
            user_phone:'(11)968552211',
            user_surname:"Doe",
            user_password:'123456'
            
        })
        expect(user).toHaveProperty('id')
    })
    

    it ('should not be able to create a new user with same email from another',async() => {
        const user = await createUser.execute({
            user_name:'John',
            user_cpf:'88522633910',
            user_phone:'(11)968552211',
            user_surname:"Doe",
            user_password:'123456'
        })

        expect(createUser.execute({
            user_name:'John',
            user_cpf:'88522633910',
            user_phone:'(11)968552211',
            user_surname:"Doe",
            user_password:'123456'})).rejects.toBeInstanceOf(AppError)
    })
})