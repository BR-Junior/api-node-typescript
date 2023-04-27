import {Request, Response} from 'express';
import {pessoaUseCaseFindOne} from '../useCase/pessoaUseCaseFindOne';

interface IParams {
  id?: string | null
}
export const pessoaFindOne = async (req:Request<IParams, {}, {}>, res:Response) => {
  const result = await pessoaUseCaseFindOne(Number(req.params.id));

  console.log(result);

  return res.status(200).json(result);
};