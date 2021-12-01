import { Router } from 'express';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { FindUserController } from '../modules/users/useCases/findUser/FindUserController';
import {DeleteUserController} from '../modules/users/useCases/deleteUser/DeleteUserController'
import {ListUsersController} from '../modules/users/useCases/listUsers/ListUsersController'

const createUserController = new CreateUserController()
const findUserController = new FindUserController()
const deleteUserController = new DeleteUserController()
const listUserController =  new ListUsersController ()

const router = Router();


router.post('/createUser',createUserController.execute);

router.post('/findUser',findUserController.execute);

router.post('/deleteUser',deleteUserController.execute);

router.post('/listUsers',listUserController.execute);

export { router };