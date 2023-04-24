import {Request, Response} from 'express';
import {cidadesRepository} from '../../../database/repositories/cidadeRepository';
import {ICidadesRequestDTO} from '../DTO/ICidadesDTO';
import {cidadeUseCaseCreate} from '../useCase/cidadeUseCaseCreate';



// Uma forma de validar dados
// const validations = (req:ICidades) => {
//   if (req.name === undefined) throw new Error('erro teste');
//
// };


export const cidadeCreate = async (req:Request<{}, {}, ICidadesRequestDTO>, res:Response) => {

  // validations(req.body);
  const newCidade = req.body;

  const find = await cidadesRepository.findOneBy({name: newCidade.name});

  if (find?.name == newCidade.name) {
    return res.status(400).json({
      errors: {
        error: 'cidade já existe'
      }
    });

  }else {

    const cidade = await cidadeUseCaseCreate(newCidade);

    return res.status(200).json(cidade);

  }
};