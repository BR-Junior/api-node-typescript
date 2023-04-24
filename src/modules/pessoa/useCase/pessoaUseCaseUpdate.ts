import { cidadesRepository } from '../../../database/repositories/cidadeRepository';
import {ICidadesRequestDTO} from '../../../DTO/ICidadesDTO/ICidadesDTO';


export const pessoaUseCaseUpdate = async (id: number, cidade:Omit<ICidadesRequestDTO, 'id'>): Promise<void | Error > => {

  try {

    await cidadesRepository.update(id, cidade);

  }catch (err) {

    console.log(err);

    return Error('Erro ao atualizar registro!');
  }

};