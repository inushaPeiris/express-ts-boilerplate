import { NextFunction, Request, Response } from "express";

import { addUser, getUsers } from "../repositories/userRepository";
import { User } from "../models/User";

export async function getUserController(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const users: User[] = await getUsers();
        res.json(users);
    } catch (error) {
        next(error);
    }
}

export async function createUserController(req: Request, res: Response, next: NextFunction): Promise<void> {
    const newUser: User = { name: req.body.name };
    try {
        const result = await addUser(newUser);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}
