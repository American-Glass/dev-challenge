import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export default class ValidadeInput {
  static joi(req: Request, _res: Response, next: NextFunction) {
    const { text } = req.body;
    const { error } = Joi.object({
        text: Joi.string().trim().required().messages({
            'any.required': `400|Texto não pode ser vazio`,
            'string.empty': `400|Campo Tarefa necessário!`,
        }),
    }).validate({ text });
    // console.log('Erro:', error);
    
    if (error) return next(error);

    return next();
  }
}