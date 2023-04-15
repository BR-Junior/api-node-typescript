import { ObjectSchema, ValidationError } from 'yup';
import { RequestHandler } from 'express';

type TValidations = (field: 'body' | 'header' | 'params' | 'query', scheme: ObjectSchema<any>) => RequestHandler

export const validation: TValidations = (field, scheme) => async (req, res, next) => {
  try {
    await scheme.validate(req[field], { abortEarly: false });
    return next();

  }catch (err) {
    const yupError = err as ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach(error => {
      if (!error.path) return;
      errors[error.path] = error.message;
    });
    return res.status(400).json({ errors: errors });
  }
};