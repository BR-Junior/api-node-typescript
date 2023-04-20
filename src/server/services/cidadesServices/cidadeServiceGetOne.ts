import {cidadesRepository} from '../../repositories/cidadesRepository/cidadesRepository';
import {ICidadesDTO} from '../../controllers/cidadesController/ICidadesDTO';

export const cidadeServiceGetOne = async (id:number): Promise<ICidadesDTO | Error > => {

  try {
    const result = await cidadesRepository.findOneBy({id:id});

    if (result) return result;

    return Error('Registro não encontrado');

  }catch (err) {
    console.log(err);

    return Error('Erro ao atualizar registro!');
  }
};