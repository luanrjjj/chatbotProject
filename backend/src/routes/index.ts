import { Router } from 'express';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { FindUserController } from '../modules/users/useCases/findUser/FindUserController';


const createUserController = new CreateUserController()
const findUserController = new FindUserController()

const router = Router();


router.post('/createUser',createUserController.execute);

router.post('/findUser',findUserController.execute);


export { router };