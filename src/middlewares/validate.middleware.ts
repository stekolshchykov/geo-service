import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

// Middleware для проверки схемы с использованием параметров запроса
export const validateRequest = (schema: ObjectSchema, source: 'body' | 'params' | 'query' = 'body') => {
    return (req: Request, res: Response, next: NextFunction): any => {
        const dataToValidate = source === 'body' ? req.body : source === 'params' ? req.params : req.query;
        const { error } = schema.validate(dataToValidate);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    };
};
