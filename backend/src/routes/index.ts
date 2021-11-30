import { Router } from 'express';
import { CreateStatementController } from '../modules/statements/useCases/createStatement/CreateStatementController';

const createStatementController = new CreateStatementController()

const router = Router();


router.post('/statement',createStatementController.execute);


export { router };