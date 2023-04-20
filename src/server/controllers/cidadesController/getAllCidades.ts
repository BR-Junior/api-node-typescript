import {Request, Response} from 'express';
import { IQueryProps } from './ICidadesDTO';
import { cidadeServiceGetAll } from '../../services/cidadesServices/cidadeServiceGetAll';



// Uma forma de validar dados
// const validations = (req:ICidades) => {
//   if (req.name === undefined) throw new Error('erro teste');
//
// };

export const getAllCidades  = async (req:Request<{}, {}, {}, IQueryProps>, res:Response) => {


  const result = await cidadeServiceGetAll(req.query.page || 1, req.query.limit || 10);

  // validations(req.body);

  console.log(result);

  return res.status(200).json(result);
};