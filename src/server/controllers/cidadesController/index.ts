import { createCidades as create } from './createCidades';
import { getAllCidades as getAll } from './getAllCidades';
import { getByIdCidades as getById } from './getByIdCidades';
import { updateById } from './updateById';
import { deete } from './delete';


export const cidadesController = {
  create,
  getAll,
  getById,
  updateById,
  deete
};