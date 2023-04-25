import {Request, Response} from 'express';
import {ICidadesRequestDTO} from '../DTO/ICidadesDTO';
import {cidadeUseCaseCreate} from '../useCase/cidadeUseCaseCreate';



// Uma forma de validar dados
// const validations = (req:ICidades) => {
//   if (req.name === undefined) throw new Error('erro teste');
//
// };


export const cidadeCreate = async (req:Request<{}, {}, ICidadesRequestDTO>, res:Response) => {
  // validations(req.body);
  const data = await cidadeUseCaseCreate(req.body);
  if (data instanceof Error) {
    return res.status(400).json({
      error: data.message
    });
  }
  return res.status(200).json(data);
};