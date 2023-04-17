import {Request, Response} from 'express';
import { IQueryProps } from './ICidadesDTO';



// Uma forma de validar dados
// const validations = (req:ICidades) => {
//   if (req.name === undefined) throw new Error('erro teste');
//
// };

export const getAllCidades  = async (req:Request<{}, {}, {}, IQueryProps>, res:Response) => {


  // validations(req.body);

  console.log(req.query);

  return res.status(200).send('Não implementado!');
};