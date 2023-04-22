import {Request, Response} from 'express';
import { ICidadeQueryDTO } from '../DTO/ICidadesDTO';
import {cidadeUseCaseFindAll} from '../useCase/cidadeUseCaseFindAll';



// Uma forma de validar dados
// const validations = (req:ICidades) => {
//   if (req.name === undefined) throw new Error('erro teste');
//
// };

export const cidadeFindAll  = async (req:Request<{}, {}, {}, ICidadeQueryDTO>, res:Response) => {


  const result = await cidadeUseCaseFindAll(req.query.page || 1, req.query.limit || 10);

  // validations(req.body);

  console.log(result);

  return res.status(200).json(result);
};