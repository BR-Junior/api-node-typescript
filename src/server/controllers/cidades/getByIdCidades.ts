import {Request, Response} from 'express';

interface IParams {
  id?: string
}
export const getByIdCidades = async (req:Request<IParams, {}, {}>, res:Response) => {

  console.log(req.params);

  return res.status(200).send('Não implementado!');
};