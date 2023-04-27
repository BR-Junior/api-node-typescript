import {Request, Response} from 'express';
import {pessoasRepository} from '../../../database/repositories/pessoaRepository';
import {pessoaUseCaseCreate} from '../useCase/pessoaUseCaseCreate';



export const pessoaCreate = async (req:Request, res:Response) => {
  const newPessoa = req.body;

  const find = await pessoasRepository.findOneBy({email: newPessoa.email});

  if (find?.email == newPessoa.email) {
    return res.status(400).json({
      errors: {
        error: 'email já existe'
      }
    });
  }else {
    const cidade = await pessoaUseCaseCreate(newPessoa);
    return res.status(200).json(cidade);
  }
};