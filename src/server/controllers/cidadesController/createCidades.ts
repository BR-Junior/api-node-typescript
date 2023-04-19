import {Request, Response} from 'express';
import { ICidadesRequestDTO } from './ICidadesDTO';
import { cidadeServiceCreate } from '../../services/cidadesServices/cidadeServiceCreate';
import {cidadesRepository} from '../../repositories/cidadesRepository/cidadesRepository';



// Uma forma de validar dados
// const validations = (req:ICidades) => {
//   if (req.name === undefined) throw new Error('erro teste');
//
// };


export const createCidades = async (req:Request<{}, {}, ICidadesRequestDTO>, res:Response) => {

  // validations(req.body);
  const newCidade = req.body;

  const find = await cidadesRepository.findOneBy({name: newCidade.name});


  if (find?.name == newCidade.name) {

    return res.status(400).json('cidade já existe');

  }else {

    const cidade = await cidadeServiceCreate(newCidade);

    return res.status(200).json(cidade);

  }
};