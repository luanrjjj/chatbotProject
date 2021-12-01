import { Router } from 'express';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';

const createUserController = new CreateUserController()

const router = Router();


router.post('/createUser',createUserController.execute);


export { router };