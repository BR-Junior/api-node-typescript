import * as yup from 'yup';
import { ICidadesDTO, IQueryProps } from './ICidadesDTO';
import { validation } from '../../shared/volidationBase';




// validação do body request
const bodySchema: yup.ObjectSchema<ICidadesDTO> = yup.object().shape({
  id: yup.string().optional(),
  name: yup.string()
    .required('compo obrigatorio')
    .min(3, 'tamanho minimo de 3 caracteres'),
});
export const validationCreate = validation('body', bodySchema);

// validação do query params
const querySchema: yup.ObjectSchema<IQueryProps> = yup.object().shape({
  page: yup.number()
    .notRequired()
    .moreThan(0, 'page deve ser maior 0'),

  limit: yup.number()
    .notRequired()
    .moreThan(0,'limit não poser menor que 0'),

  filter: yup.string()
    .notRequired(),
});
export const validationQuery = validation('query', querySchema);


// o Partial<> do torna os campos não obrigatorios
// type camposObrigatorios = {
//   campoObrigatorio: string
//   campoObrigatorio: string
// }
// Partial<camposObrigatorios>

// const validationsTeste: TValidations = (scheme) => async (req, res, next) => {} igual a:
// const validationsTeste: TValidations = (scheme) => {
// return async (req, res, next) => {}
// }


// Essa é uma forma de fazer um validador
// export const validations:RequestHandler = async (req, res, next) => {
//
//   try {
//     await bodySchema.validate(req.body, { abortEarly: false });
//     return next();
//
//   }catch (err) {
//     const yupError = err as yup.ValidationError;
//     const massegaErrors: Record<string, string> = {};
//
//     yupError.inner.forEach(error => {
//       if (!error.path) return;
//       massegaErrors[error.path] = error.message;
//     });
//     return res.status(400).json({ errors: massegaErrors });
//   }
// };
// export const validationsQuery:RequestHandler = async (req, res, next) => {
//
//   try {
//     await querySchema.validate(req.body, { abortEarly: false });
//     return next();
//
//   }catch (err) {
//     const yupError = err as yup.ValidationError;
//     const massegaErrors: Record<string, string> = {};
//
//     yupError.inner.forEach(error => {
//       if (!error.path) return;
//       massegaErrors[error.path] = error.message;
//     });
//     return res.status(400).json({ errors: massegaErrors });
//   }
// };