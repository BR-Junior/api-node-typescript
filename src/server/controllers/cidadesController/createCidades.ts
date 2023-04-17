import {Request, Response} from 'express';
import { ICidadesRequestDTO } from './ICidadesDTO';



// Uma forma de validar dados
// const validations = (req:ICidades) => {
//   if (req.name === undefined) throw new Error('erro teste');
//
// };

export const createCidades = async (req:Request<{}, {}, ICidadesRequestDTO>, res:Response) => {


  // validations(req.body);

  console.log(req.body);

  return res.status(200).send('Não implementado!');
};