import Joi from 'joi';

export const userSchema = Joi.object({
    name: Joi.string().min(3).required().messages({
        'string.min': 'Name must be at least 3 characters long',
    })
});
