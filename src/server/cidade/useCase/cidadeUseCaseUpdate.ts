import { cidadesRepository } from '../../models/repositories/cidadeRepository';
import {ICidadesRequestDTO} from '../../DTO/ICidadesDTO/ICidadesDTO';


export const cidadeUseCaseUpdate = async (id: number, cidade:Omit<ICidadesRequestDTO, 'id'>): Promise<void | Error > => {

  try {

    await cidadesRepository.update(id, cidade);

  }catch (err) {

    console.log(err);

    return Error('Erro ao atualizar registro!');
  }

};