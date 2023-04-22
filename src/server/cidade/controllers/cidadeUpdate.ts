import {Request, Response} from 'express';
import { ICidadesRequestDTO } from '../DTO/ICidadesDTO';
import {cidadeUseCaseUpdate} from '../useCase/cidadeUseCaseUpdate';



interface IParams {
  id?: number
}
export const cidadeUpdate = async (req:Request<IParams, {}, ICidadesRequestDTO>, res:Response) => {
  if (!req.params.id) {
    return res.status(400).json({
      errors: {
        error: 'O parâmetro "id" é obrigatoria'
      }
    });
  }

  const result = cidadeUseCaseUpdate(req.params.id, req.body);
  if (result instanceof Error) {
    return res.status(500).json({
      errors: {
        error: result.message
      }
    });
  }

  return res.status(201).json(req.body);
};