import { Request, Response } from 'express';
import { getUsers, createUser } from '../services/user.service';
import { UserI } from '../models/user.model';

export const getAllUsers = (req: Request, res: Response): void => {
    const users = getUsers();
    res.status(200).json(users);
};

export const addUser = (req: Request, res: Response): void => {
    const { id, name, email } = req.body;
    const newUser: UserI = { id, name, email };
    const user = createUser(newUser);
    res.status(201).json(user);
};
