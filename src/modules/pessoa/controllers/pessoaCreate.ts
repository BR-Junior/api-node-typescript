import {Request, Response} from 'express';
import {pessoasRepository} from '../../../database/repositories/pessoaRepository';
import {pessoaUseCaseCreate} from '../useCase/pessoaUseCaseCreate';



// Uma forma de validar dados
// const validations = (req:ICidades) => {
//   if (req.name === undefined) throw new Error('erro teste');
//
// };


export const pessoaCreate = async (req:Request, res:Response) => {

  // validations(req.body);
  const {...newPessoa} = req.body;
  console.log(req.body);

  const find = await pessoasRepository.findOneBy({email: newPessoa.email});

  if (find?.email == newPessoa.email) {
    return res.status(400).json({
      errors: {
        error: 'email já existe'
      }
    });

  }else {

    const cidade = await pessoaUseCaseCreate(newPessoa);
    console.log(newPessoa);

    return res.status(200).json(cidade);

  }
};