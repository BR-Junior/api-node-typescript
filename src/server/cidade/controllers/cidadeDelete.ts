import {Request, Response} from 'express';
import {cidadeUseCaseDelete} from '../useCase/cidadeUseCaseDelete';


interface IParams {
  id?: string
}
export const cidadeDelete = async (req:Request<IParams, {}, {}>, res:Response) => {

  await cidadeUseCaseDelete(Number(req.params.id));

  console.log(req.params);

  return res.status(200).json(`O id:${req.params.id} foi apagado`);
};