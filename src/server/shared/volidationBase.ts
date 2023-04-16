import { ObjectSchema, ValidationError } from 'yup';
import { RequestHandler } from 'express';

type TValidations = (field: 'body' | 'header' | 'params' | 'query', schemas: ObjectSchema<any>) => RequestHandler

export const validation: TValidations = (field, schemas) => async (req, res, next) => {
  try {
    await schemas.validate(req[field], { abortEarly: false });
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