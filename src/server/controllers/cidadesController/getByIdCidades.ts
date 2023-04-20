import {Request, Response} from 'express';
import {cidadeServiceGetOne} from '../../services/cidadesServices/cidadeServiceGetOne';

interface IParams {
  id?: string | null
}
export const getByIdCidades = async (req:Request<IParams, {}, {}>, res:Response) => {
  const result = await cidadeServiceGetOne(Number(req.params.id));

  console.log(result);

  return res.status(200).json(result);
};