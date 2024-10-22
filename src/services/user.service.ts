import { UserI } from '../models/user.model';

const users: UserI[] = [];

export const getUsers = (): UserI[] => {
    return users;
};

export const createUser = (user: UserI): UserI => {
    users.push(user);
    return user;
};
