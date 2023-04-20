import {ICidadesRequestDTO} from '../../DTO/ICidadesDTO/ICidadesDTO';
import { cidadesRepository } from '../../repositories/cidadesRepository/cidadesRepository';

export const cidadeServiceUpdata = async (id: number, cidade:Omit<ICidadesRequestDTO, 'id'>): Promise<void | Error > => {

  try {

    await cidadesRepository.update(id, cidade);

  }catch (err) {

    console.log(err);

    return Error('Erro ao atualizar registro!');
  }

};