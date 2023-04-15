import * as validations from './validations';
import { createCidades as create } from './createCidades';
import { getAllCidades as getAll } from './getAllCidades';


export const cidadesController = {
  // isValid: validations
  ...validations,
  create,
  getAll,
};