import FakeUsersRepository from '../../repositories/fakes/FakerUsersRepository';
import CreateUserUseCase from '../createUser/CreateUserUseCase';
import FakeHashProvider from '../../providers/HashProvider/fakes/FakeHashProvider';
import AppError from '../../../../Errors/AppError';
import FindUserUseCase from './FindUserUseCase';


let createUser:CreateUserUseCase;
let fakeHashProvider:FakeHashProvider;
let fakeUsersRepository:FakeUsersRepository;
let findUser:FindUserUseCase;

describe('CreateUser',()=> {
    beforeEach(()=> {
        fakeUsersRepository = new FakeUsersRepository()
        createUser = new CreateUserUseCase(fakeUsersRepository,fakeHashProvider)
        fakeHashProvider = new FakeHashProvider()
        findUser = new FindUserUseCase(fakeUsersRepository)
    })


    it('should be able to find a new user',async ()=> {
        const user = await createUser.execute({
            user_name:'John',
            user_cpf:'88522633910',
            user_phone:'(11)968552211',
            user_surname:"Doe",
            user_password:'123456'
            
        })

        const userFound = await findUser.execute(
            '88522633910'
        )

        expect(userFound).toHaveProperty('id')
    })
    

    it ('should not be able to find a user without to be registred ',async() => {
        const userFound = await findUser.execute(
            '88522633910'
        )

        expect(userFound).resolves.toBeInstanceOf(AppError)
   
})
})