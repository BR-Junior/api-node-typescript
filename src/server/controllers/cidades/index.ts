import * as controllers from './createCidades';
import { validations } from './validations';

export const cidadesController = {
  ...controllers,
  // isValid: validations
  validations
};