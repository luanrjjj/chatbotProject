import 'reflect-metadata';
import './container';
import { router } from './routes';
import {Request , Response, NextFunction, response} from 'express';
import './database/index'

var cors = require('cors')
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

app.post('/statement', router);


app.get('/',(request:Request,response:Response)=> {
    return response.json({message:'Hello Gold;'});
})

export { app };