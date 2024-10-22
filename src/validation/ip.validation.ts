import Joi from 'joi';

export const ipSchema = Joi.object({
    ip: Joi.string().required().messages({
        'string.empty': 'IP is required',
        'string.min': 'Name must be at least 3 characters long',
    })
});
