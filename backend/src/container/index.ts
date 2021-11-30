import { container,delay } from 'tsyringe';


import {IUsersRepository} from '../modules/users/repositories/IUsersRepository'
import {UsersRepository} from '../modules/users/repositories/UsersRepository'

console.log('passou aqui')
container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    delay(()=>UsersRepository
))