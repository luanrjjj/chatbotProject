import { container,delay } from 'tsyringe';


import {IUsersRepository} from '../modules/users/repositories/IUsersRepository'
import {UsersRepository} from '../modules/users/repositories/UsersRepository'


import IHashProvider from '../modules/users/providers/HashProvider/models/IHashProvider';
import BCryptHashProvider from '../modules/users/providers/HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    delay(()=>UsersRepository
))


container.registerSingleton<IHashProvider> (
    'HashProvider',
    BCryptHashProvider
)


