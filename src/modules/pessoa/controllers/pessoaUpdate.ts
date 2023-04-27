import {Request, Response} from 'express';
import {IPessoaUpdateDTO} from '../DTO/IPessoaDTO';
import {pessoaUseCaseUpdate} from '../useCase/pessoaUseCaseUpdate';



interface IParams {
  id?: number
}
export const pessoaUpdate = async (req:Request<IParams, {}, Omit<IPessoaUpdateDTO, 'id'>>, res:Response) => {
  if (!req.params.id) {
    return res.status(400).json({
      errors: {
        error: 'O parâmetro "id" é obrigatoria'
      }
    });
  }

  const result = await pessoaUseCaseUpdate(req.params.id, req.body);
  if (result instanceof Error) {
    return res.status(500).json({
      errors: {
        error: result.message
      }
    });
  }

  return res.status(201).json(req.body);
};