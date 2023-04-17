import * as yup from 'yup';
import { validation } from '../volidationBase';




// // validação do create
export const create = validation({
  body: yup.object().shape({
    id: yup.string().optional(),
    name: yup.string()
      .required('compo obrigatorio')
      .min(3, 'tamanho minimo de 3 caracteres'),
  }),
});

// validação do Get All
export const getAll = validation({
  query: yup.object().shape({
    page: yup.number()
      .notRequired()
      .moreThan(0, 'page deve ser maior 0'),

    limit: yup.number()
      .notRequired()
      .moreThan(0,'limit não poser menor que 0'),

    filter: yup.string()
      .notRequired(),
  })
});

// validação do Gte one
export const getOne = validation({
  params: yup.object().shape({
    id: yup.number()
      .required('compo obrigatorio')
      .integer()
      .moreThan(0, 'page deve ser maior 0'),
  })
});

// validação do Update
export const update = validation({
  params: yup.object().shape({
    id: yup.number()
      .required('compo obrigatorio')
      .integer()
      .moreThan(0, 'page deve ser maior 0'),
  }),
  body: yup.object().shape({
    id: yup.string().optional(),
    name: yup.string()
      .required('compo obrigatorio')
      .min(3, 'tamanho minimo de 3 caracteres'),
  }),
});

// validação do delete
export const deleteOne = validation({
  params: yup.object().shape({
    id: yup.number()
      .required('compo obrigatorio')
      .integer()
      .moreThan(0, 'page deve ser maior 0'),
  })
});



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