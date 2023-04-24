import {Request, Response} from 'express';
import {cidadeUseCaseFindOne} from '../useCase/cidadeUseCaseFindOne';

interface IParams {
  id?: string | null
}
export const cidadeFindOne = async (req:Request<IParams, {}, {}>, res:Response) => {
  const result = await cidadeUseCaseFindOne(Number(req.params.id));

  console.log(result);

  return res.status(200).json(result);
};