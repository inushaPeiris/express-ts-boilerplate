import { QueryResult } from 'mysql2';

import connection from '../db/connection';
import { User } from '../models/User';

export function getUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM country', (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results as User[]);
        });
    });
};

export function addUser(user: User): Promise<QueryResult> {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO country (name) VALUES (?)', [user.name], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};
