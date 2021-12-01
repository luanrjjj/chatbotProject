import FakeUsersRepository from '../../repositories/fakes/FakerUsersRepository';
import CreateUserUseCase from '../createUser/CreateUserUseCase';
import FakeHashProvider from '../../providers/HashProvider/fakes/FakeHashProvider';
import AppError from '../../../../Errors/AppError';
import FindUserUseCase from '../findUser/FindUserUseCase';
import DeleteUserUseCase from './DeleteUserUseCase';


let createUser:CreateUserUseCase;
let fakeHashProvider:FakeHashProvider;
let fakeUsersRepository:FakeUsersRepository;
let findUser:FindUserUseCase;
let deleteUser:DeleteUserUseCase

describe('DeleteUser',()=> {
    beforeEach(()=> {
        fakeUsersRepository = new FakeUsersRepository()
        createUser = new CreateUserUseCase(fakeUsersRepository,fakeHashProvider)
        fakeHashProvider = new FakeHashProvider()
        findUser = new FindUserUseCase(fakeUsersRepository)
        deleteUser = new DeleteUserUseCase(fakeUsersRepository)
    })


    it('should be able to delete a  user',async ()=> {
        const user = await createUser.execute({
            user_name:'John',
            user_cpf:'88522633910',
            user_phone:'(11)968552211',
            user_surname:"Doe",
            user_password:'123456'
            
        })

        
        await deleteUser.execute('88522633910')

        const userVerifyDelete =  await findUser.execute(
            '88522633910'
        )
       return userVerifyDelete
        expect(userVerifyDelete).toBeInstanceOf(AppError)
    })
    

    it ('should not be able to delete a user ',async() => {
        const userFound = await findUser.execute(
            '88522633910'
        )

         expect(userFound).toBeInstanceOf(AppError)
   
})
})