import Joi from 'joi';

export const ipSchema = Joi.object({
    ip: Joi.string().required().messages({
        'string.empty': 'IP is required',
        'string.min': 'Name must be at least 3 characters long',
    })
});

export const isIpInRangeSchema = Joi.object({
    ip: Joi.string().required().messages({
        'string.empty': 'IP is required',
        'string.min': 'Name must be at least 3 characters long',
    }),
    range: Joi.string().required().messages({
        'string.empty': 'IP is required',
        'string.min': 'Name must be at least 3 characters long',
    })
});

export const isValidIpRangeSchema = Joi.object({
    range: Joi.string().required().messages({
        'string.empty': 'IP is required',
        'string.min': 'Name must be at least 3 characters long',
    })
});


export const checkIpAgainstListSchema = Joi.object({
    ip: Joi.string().required().messages({
        'string.empty': 'IP is required',
        'string.min': 'Name must be at least 3 characters long',
    }),
    ipList: Joi.string().required().messages({
        'string.empty': 'IP is required',
        'string.min': 'Name must be at least 3 characters long',
    })
});
