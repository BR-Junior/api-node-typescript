import { RequestHandler } from 'express';
import * as yup from 'yup';
import { ICidadesDTO } from './ICidadesDTO';



const bodySchema: yup.ISchema<ICidadesDTO> = yup.object().shape({
  name: yup.string()
    .required('compo obrigatorio').
    min(3, 'minimo de 3'),

  name2: yup.string()
    .required()
    .min(3, 'minimo de 3')
});
export const validations:RequestHandler = async (req, res, next) => {
   
  try {
    await bodySchema.validate(req.body, { abortEarly: false });
    return next();

  }catch (err) {
    const yupError = err as yup.ValidationError;
    const massegaErrors: Record<string, string> = {};

    yupError.inner.forEach(error => {
      if (!error.path) return;
      massegaErrors[error.path] = error.message;
    });
    return res.status(400).json({ errors: massegaErrors });
  }
};