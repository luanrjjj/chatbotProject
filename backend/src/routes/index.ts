import { Router } from 'express';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { FindUserController } from '../modules/users/useCases/findUser/FindUserController';
import {DeleteUserController} from '../modules/users/useCases/deleteUser/DeleteUserController'

const createUserController = new CreateUserController()
const findUserController = new FindUserController()
const deleteUserController = new DeleteUserController()

const router = Router();


router.post('/createUser',createUserController.execute);

router.post('/findUser',findUserController.execute);

router.post('/deleteUser',deleteUserController.execute);


export { router };