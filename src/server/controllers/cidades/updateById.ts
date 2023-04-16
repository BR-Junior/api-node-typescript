import {Request, Response} from 'express';
import { ICidadesRequestDTO } from './ICidadesDTO';


interface IParams {
  id?: string
}
export const updateById = async (req:Request<IParams, {}, ICidadesRequestDTO>, res:Response) => {

  console.log(req.params);
  console.log(req.body);

  return res.status(200).send('Não implementado!');
};