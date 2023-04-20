import {Request, Response} from 'express';
import {cidadeServiceDelete} from '../../services/cidadesServices/cidadeServiceDelete';


interface IParams {
  id?: string
}
export const deete = async (req:Request<IParams, {}, {}>, res:Response) => {

  await cidadeServiceDelete(Number(req.params.id));

  console.log(req.params);

  return res.status(200).json(`O id:${req.params.id} foi apagado`);
};