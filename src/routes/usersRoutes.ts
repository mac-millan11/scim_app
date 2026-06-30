import express from 'express';
import type {Request, Response} from 'express';
import { getUsers_all, getUser_id, createUser } from '../controller/usersController.js';
export const userRouter = express.Router();


userRouter.get('/users', getUsers_all);

userRouter.get('/users/:id', getUser_id)

userRouter.post('/users', createUser);
