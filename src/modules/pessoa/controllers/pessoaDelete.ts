import {Request, Response} from 'express';
import {pessoaUseCaseDelete} from '../useCase/pessoaUseCaseDelete';



interface IParams {
  id?: string
}
export const pessoaDelete = async (req:Request<IParams, {}, {}>, res:Response) => {

  await pessoaUseCaseDelete(Number(req.params.id));

  console.log(req.params);

  return res.status(200).json(`O id:${req.params.id} foi apagado`);
};