import { pessoasRepository } from '../../../database/repositories/pessoaRepository';
import {IPessoaUpdateDTO} from '../DTO/IPessoaDTO';

// Omit<IPessoaDTO, 'id'>
export const pessoaUseCaseUpdate = async (id: number, cidade:IPessoaUpdateDTO): Promise<void | Error > => {

  try {

    await pessoasRepository.update(id, cidade);

  }catch (err) {

    console.log(err);

    return Error('Erro ao atualizar registro!');
  }

};