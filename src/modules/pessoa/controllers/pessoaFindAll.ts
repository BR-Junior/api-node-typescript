import {Request, Response} from 'express';
import { IPessoaQueryDTO } from '../DTO/IPessoaDTO';
import {pessoaUseCaseFindAll} from '../useCase/pessoaUseCaseFindAll';



// Uma forma de validar dados
// const validations = (req:ICidades) => {
//   if (req.name === undefined) throw new Error('erro teste');
//
// };

export const pessoaFindAll  = async (req:Request<{}, {}, {}, IPessoaQueryDTO>, res:Response) => {


  const result = await pessoaUseCaseFindAll(req.query.page || 1, req.query.limit || 10);

  // validations(req.body);

  console.log(result);

  return res.status(200).json(result);
};