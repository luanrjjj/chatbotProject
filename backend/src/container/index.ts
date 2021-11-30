import { container,delay } from 'tsyringe';


import {IStatementsRepository} from '../modules/statements/repositories/IStatementsRepository'
import {StatementsRepository} from '../modules/statements/repositories/StatementsRepository'

console.log('passou aqui')
container.registerSingleton<IStatementsRepository>(
    'StatementsRepository',
    delay(()=>StatementsRepository
))